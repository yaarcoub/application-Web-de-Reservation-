package com.example.demo.Model;

import jakarta.persistence.Entity;

import java.time.Instant;

@Entity
public class ReservationHotel extends  LigneReservation{

    private Instant DateArrivée;
    private int  nb_Nuit ;

    private String CIN ;
    private int nombrePersonnes ;



    public String getCIN() {
        return CIN;
    }

    public void setCIN(String CIN) {
        this.CIN = CIN;
    }

    public int getNombrePersonnes() {
        return nombrePersonnes;
    }
    public void setNombrePersonnes(int nombrePersonnes) {
        this.nombrePersonnes = nombrePersonnes;
    }

    public Instant getDateArrivée() {
        return DateArrivée;
    }

    public void setDateArrivée(Instant dateArrivée) {
        DateArrivée = dateArrivée;
    }

    public int getNb_Nuit() {
        return nb_Nuit;
    }

    public void setNb_Nuit(int nb_Nuit) {
        this.nb_Nuit = nb_Nuit;
    }
}
