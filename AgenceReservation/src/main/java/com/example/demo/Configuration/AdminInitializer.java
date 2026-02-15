package com.example.demo.Configuration;

import com.example.demo.Model.Utilisateur;
import com.example.demo.Repo.UtilisateurRepo;
import com.example.demo.Utils.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class AdminInitializer implements CommandLineRunner {

    @Autowired
    private  UtilisateurRepo utilisateurRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder(10);


    @Override
    public void run(String... args) {

        if (!utilisateurRepository.existsByRole(Role.ADMIN)) {

            Utilisateur admin = new Utilisateur();
            admin.setName("Admin");
            admin.setEmail("admin@gmail.com");
            admin.setPassword(bCryptPasswordEncoder.encode("admin123"));
            admin.setRole(Role.ADMIN);
            admin.setIs_enable(true);

            utilisateurRepository.save(admin);

        }
    }
}
