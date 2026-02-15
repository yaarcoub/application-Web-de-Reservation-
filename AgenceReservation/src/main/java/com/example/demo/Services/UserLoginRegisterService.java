package com.example.demo.Services;


import com.example.demo.Dto.JwtDto;
import com.example.demo.Dto.UtilisateurDto;
import com.example.demo.Model.Auth.ConnectUser;
import com.example.demo.Model.Utilisateur;
import com.example.demo.Model.VerificationToken;
import com.example.demo.Repo.UtilisateurRepo;
import com.example.demo.Repo.VerificationTokenRepo;
import com.example.demo.Services.DetailsServiceUser.UserDetailsServiceClasse;
import com.example.demo.Services.EmailService.EmailService;
import com.example.demo.Services.JwtServices.JwtGenerate;
import com.example.demo.Utils.Role;
import com.example.demo.Validator.UtilisateurValidator;
import com.example.demo.exception.EntityNotFoundException;
import com.example.demo.exception.ErrorCode;
import com.example.demo.exception.InvalidEntityException;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class UserLoginRegisterService {
    @Autowired
    private UtilisateurRepo userRepo;

    @Autowired
    private JwtGenerate jwtGenerate;
    @Autowired
    private UserDetailsServiceClasse userDetailsService;

    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);


    @Autowired
    private EmailService emailService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private VerificationTokenRepo verificationTokenRepo;


    public UtilisateurDto register(UtilisateurDto User) throws MessagingException {
        User.setRole(Role.CLIENT);
        List<String> errors = UtilisateurValidator.validate(User);

        if (!errors.isEmpty()) {
            throw new InvalidEntityException("les champes ne sont pas complet", ErrorCode.NOT_VALID_INFO, errors);
        }
        if (userRepo.findUtilisateurByEmail(User.getEmail()) != null) {
            throw new InvalidEntityException("déja un client exist avec ce email " + User.getEmail(), ErrorCode.USER_ALREADY_EXIST);
        }
        User.setPassword(bCryptPasswordEncoder.encode(User.getPassword()));
        Utilisateur utilisateur = userRepo.save(UtilisateurDto.toEntity(User));
        SendEmailVerification(utilisateur);
        return UtilisateurDto.fromEntity(utilisateur);
    }


    public void setting(UtilisateurDto user) {
        Utilisateur utilisateur = userRepo.findById(user.getId()).orElseThrow(
                () -> {
                    throw new EntityNotFoundException("ce utilisateur ne exist pas", ErrorCode.NOT_VALID_INFO);
                }
        );


    }


    private void SendEmailVerification(Utilisateur utilisateur) throws MessagingException {
        String code = generateCodeVerification(6);
        VerificationToken verificationToken = new VerificationToken();
        verificationToken.setToken(code);
        verificationToken.setExpiration(LocalDateTime.now().plusMinutes(10));
        verificationToken.setUtilisateur(utilisateur);
        verificationToken.setUsed(false);

        verificationToken = verificationTokenRepo.save(verificationToken);
        if (verificationToken == null) {
            throw new InvalidEntityException("le token de verification n'est pas en cours généré ", ErrorCode.INVALID_OPERATION);
        }
        emailService.sendVerificationEmail(utilisateur, code);
    }

    private String generateCodeVerification(int length) {
        String numbers = "0123456789";
        String code = "";
        for (int i = 0; i < length; i++) {
            int randomInt = (int) (Math.random() * numbers.length());
            code += numbers.charAt(randomInt);
        }
        return code;
    }


    public void EnableAccount(String token) {
        VerificationToken verificationToken = verificationTokenRepo.findByToken(token);
        if (verificationToken == null) {
            throw new EntityNotFoundException("Token No Trouver ", ErrorCode.NOT_FOUND_TOKEN);
        }

        if (verificationToken.getExpiration().isBefore(LocalDateTime.now())) {
            verificationTokenRepo.deleteById(verificationToken.getId());
            throw new InvalidEntityException("Token Expiration Date ", ErrorCode.INVALID_OPERATION);
        }

        Utilisateur User = userRepo.findUtilisateurByEmail(verificationToken.getUtilisateur().getEmail());
        User.setIs_enable(true);
        userRepo.save(User);
        verificationTokenRepo.deleteById(verificationToken.getId());
    }


    public JwtDto login(UtilisateurDto User) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(User.getEmail(), User.getPassword())
        );

        if (!authentication.isAuthenticated()) {
            throw new EntityNotFoundException("Ce Utilisateur Ne exist pas", ErrorCode.USER_NOT_FOUND);
        }
        ConnectUser connectUser = (ConnectUser) authentication.getPrincipal();
        JwtDto jwtDto = new JwtDto();
        String jwt = jwtGenerate.generateToken(connectUser);
        jwtDto.setAccessToken(jwt);
        jwtDto.setId(connectUser.getUser().getId());
        jwtDto.setRole(connectUser.getUser().getRole().name());
        jwtDto.setNom(connectUser.getUser().getName());
        jwtDto.setUrlImage(connectUser.getUser().getUserImage());
        if(connectUser.getUser().getAge() != null)jwtDto.setAge(connectUser.getUser().getAge() );
        jwtDto.setPays(connectUser.getUser().getPays());
        jwtDto.setGenre(connectUser.getUser().getGenre());

        return jwtDto;

    }

    public void requestPasswordReset(String email) throws MessagingException {
        Utilisateur user = userRepo.findUtilisateurByEmail(email);
        if (user == null) {
            throw new EntityNotFoundException("Utilisateur introuvable pour cet email", ErrorCode.USER_NOT_FOUND);
        }

        // Générer un token aléatoire
        String token = generateCodeVerification(6); // tu peux aussi utiliser UUID.randomUUID().toString()

        VerificationToken resetToken = new VerificationToken();
        resetToken.setToken(token);
        resetToken.setExpiration(LocalDateTime.now().plusMinutes(15)); // token valide 15 min
        resetToken.setUtilisateur(user);
        resetToken.setUsed(false);

        verificationTokenRepo.save(resetToken);

        // Envoyer email avec le token pour réinitialisation
        emailService.sendPasswordResetCodeEmail(user, token);
    }



    public void resetPassword(String token, String newPassword) {
        VerificationToken verificationToken = verificationTokenRepo.findByToken(token);

        if (verificationToken == null) {
            throw new EntityNotFoundException("Token introuvable", ErrorCode.NOT_FOUND_TOKEN);
        }

        if (verificationToken.getExpiration().isBefore(LocalDateTime.now())) {
            verificationTokenRepo.deleteById(verificationToken.getId());
            throw new InvalidEntityException("Token expiré", ErrorCode.INVALID_OPERATION);
        }

        if (verificationToken.isUsed()) {
            throw new InvalidEntityException("Token déjà utilisé", ErrorCode.INVALID_OPERATION);
        }

        Utilisateur user = verificationToken.getUtilisateur();
        user.setPassword(bCryptPasswordEncoder.encode(newPassword));
        userRepo.save(user);

        verificationTokenRepo.deleteById(verificationToken.getId());
    }



    public UtilisateurDto updateUtilisateur(UtilisateurDto dto) {
     System.out.println("################################# helo"+dto.getId());
        Utilisateur utilisateur = userRepo.findById(dto.getId())
                .orElseThrow(() -> new EntityNotFoundException(
                        "Utilisateur introuvable", ErrorCode.USER_NOT_FOUND));

        // Mise à jour partielle
        if (dto.getName() != null) utilisateur.setName(dto.getName());
        if (dto.getGenre() != null) utilisateur.setGenre(dto.getGenre());
        if (dto.getPays() != null) utilisateur.setPays(dto.getPays());
        if (dto.getAge() > 0) utilisateur.setAge(dto.getAge());

        // Sauvegarde et mapping
        UtilisateurDto updatedDto = UtilisateurDto.fromEntity(userRepo.save(utilisateur));

        return updatedDto;

    }

}
