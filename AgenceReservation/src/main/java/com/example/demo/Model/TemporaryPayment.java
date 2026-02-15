package com.example.demo.Model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class TemporaryPayment extends AbstractEntity  {
    @ManyToOne
    @JoinColumn(name = "utilisateur")
    private Utilisateur utilisateur ;
    @Lob
    @Column(name = "offre_list", columnDefinition = "TEXT")
    private String offreListJson;

    private String paiementID;
    private double prixTotal ;

    public Utilisateur getUtilisateur() {
        return utilisateur;
    }

    public void setUtilisateur(Utilisateur utilisateur) {
        this.utilisateur = utilisateur;
    }



    public String getPaiementID() {
        return paiementID;
    }

    public String getOffreListJson() {
        return offreListJson;
    }

    public void setOffreListJson(String offreListJson) {
        this.offreListJson = offreListJson;
    }

    public void setPaiementID(String paiementID) {
        this.paiementID = paiementID;
    }

    public double getPrixTotal() {
        return prixTotal;
    }

    public void setPrixTotal(double prixTotal) {
        this.prixTotal = prixTotal;
    }
}
