package com.example.demo.Services.DetailsServiceUser;

import com.example.demo.Model.Utilisateur;
import com.example.demo.Model.Auth.ConnectUser;
import com.example.demo.Repo.UtilisateurRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceClasse implements UserDetailsService {
    @Autowired
    private UtilisateurRepo clientRepo ;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Utilisateur utilisateur = clientRepo.findUtilisateurByEmail(email);

         if( utilisateur == null){
             System.out.print("This user dose not existe !!!");
           throw new  UsernameNotFoundException("Note fund Exception") ;
         }

        return new ConnectUser(utilisateur);
    }
}
