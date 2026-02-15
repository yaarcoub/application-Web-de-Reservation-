package com.example.demo.Model;

import com.example.demo.Utils.StatusReservation;
import jakarta.persistence.*;


import java.util.List;

@Entity
public class Reservation extends AbstractEntity {

    private double montantTotal;

    @ManyToOne
    @JoinColumn(name = "idClient")
    private   Utilisateur client ;

    @OneToMany(mappedBy = "reservation")
    private List<LigneReservation> LigneReservation ;

    @OneToOne(mappedBy = "reservation")
    private Paiement paiement;



    public double getMontantTotal() {
        return montantTotal;
    }

    public void setMontantTotal(double montantTotal) {
        this.montantTotal = montantTotal;
    }

    public Utilisateur getClient() {
        return client;
    }

    public void setClient(Utilisateur client) {
        this.client = client;
    }

    public List<com.example.demo.Model.LigneReservation> getLigneReservation() {
        return LigneReservation;
    }

    public void setLigneReservation(List<com.example.demo.Model.LigneReservation> ligneReservation) {
        LigneReservation = ligneReservation;
    }

    public Paiement getPaiement() {
        return paiement;
    }

    public void setPaiement(Paiement paiement) {
        this.paiement = paiement;
    }
}
