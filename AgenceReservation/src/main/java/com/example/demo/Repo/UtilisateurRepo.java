package com.example.demo.Repo;

import com.example.demo.Model.Utilisateur;
import com.example.demo.Utils.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtilisateurRepo extends JpaRepository<Utilisateur,Integer> {
    Utilisateur findUtilisateurByEmail(String email) ;

    boolean existsByRole(Role role);

}
