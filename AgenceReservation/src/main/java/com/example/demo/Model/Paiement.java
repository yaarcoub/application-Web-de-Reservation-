package com.example.demo.Model;

import com.example.demo.Utils.StatusPaiement;
import com.example.demo.Utils.StatusReservation;
import jakarta.persistence.*;


@Entity
public class Paiement extends  AbstractEntity{
    private double montant ;
    @Column(name = "paiement_id")
    private String paiementId;


    @OneToOne
    @JoinColumn(name = "idReservation")
    private Reservation reservation ;

    @Enumerated(EnumType.STRING)

    private StatusPaiement status ;

    public StatusPaiement getStatus() {
        return status;
    }

    public void setStatus(StatusPaiement status) {
        this.status = status;
    }

    @ManyToOne
    @JoinColumn(name = "idClient")
    private Utilisateur client ;

    public double getMontant() {
        return montant;
    }

    public void setMontant(double montant) {
        this.montant = montant;
    }

    public String getPaiementId() {
        return paiementId;
    }

    public void setPaiementId(String paiementId) {
        this.paiementId = paiementId;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    public Utilisateur getClient() {
        return client;
    }

    public void setClient(Utilisateur client) {
        this.client = client;
    }
}
