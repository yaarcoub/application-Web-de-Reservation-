package com.example.demo.Dto;

import com.example.demo.Model.Offre;

import java.time.Instant;

public class ReservationOffreHotel extends ReservationOffre {


    private Instant dateArrivee;
    private Instant dateDepart;

    private int nombreNuits;

    private  int nombrePersonnes ;


   private Client client ;

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public int getNombrePersonnes() {
        return nombrePersonnes;
    }

    public void setNombrePersonnes(int nombrePersonnes) {
        this.nombrePersonnes = nombrePersonnes;
    }

    public Instant getDateArrivee() {
        return dateArrivee;
    }

    public void setDateArrivee(Instant dateArrivee) {
        this.dateArrivee = dateArrivee;
    }

    public Instant getDateDepart() {
        return dateDepart;
    }

    public void setDateDepart(Instant dateDepart) {
        this.dateDepart = dateDepart;
    }

    public int getNombreNuits() {
        return nombreNuits;
    }

    public void setNombreNuits(int nombreNuits) {
        this.nombreNuits = nombreNuits;
    }

    @Override
    public double calculerPrix(Offre offre) {
        return (offre.getPrix() * (100.0 - offre.getPromotion()) / 100.0) *nombreNuits;
    }

}
