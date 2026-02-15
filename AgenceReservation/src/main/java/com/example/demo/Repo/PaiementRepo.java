package com.example.demo.Repo;


import com.example.demo.Dto.UtilisateurDto;
import com.example.demo.Model.Paiement;
import com.example.demo.Model.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaiementRepo extends JpaRepository<Paiement,Integer> {

    public List<Paiement> findByClient(Utilisateur User) ;
   public Paiement findByPaiementId(String paiementId);
}
