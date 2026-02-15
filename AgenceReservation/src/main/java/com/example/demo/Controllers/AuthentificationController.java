package com.example.demo.Controllers;

import com.example.demo.Controllers.Api.AuthentificationApi;
import com.example.demo.Dto.EmailBody;
import com.example.demo.Dto.JwtDto;
import com.example.demo.Dto.PasswordReset;
import com.example.demo.Dto.UtilisateurDto;
import com.example.demo.Services.UserLoginRegisterService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthentificationController implements AuthentificationApi {

    @Autowired
    private UserLoginRegisterService service;

 @Override
    public UtilisateurDto register( UtilisateurDto User) throws MessagingException {

        return service.register(User);
    }

    @Override
    public JwtDto login( UtilisateurDto client){
        return service.login(client);
    }



    @Override
    public void EnableAccount(String token) {
     service.EnableAccount(token);
    }

    @Override
    public void requestPasswordReset(EmailBody email) throws MessagingException {
        service.requestPasswordReset(email.getEmail());
    }

    @Override
    public void resetPassword(PasswordReset body) {
      service.resetPassword(body.getToken() ,body.getNewPassword());
    }


    @Override
    public UtilisateurDto Update_User(@RequestBody UtilisateurDto utilisateurDto) {
        return service.updateUtilisateur(utilisateurDto) ;
    }


}

