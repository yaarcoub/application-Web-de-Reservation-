package com.example.demo.Dto;

import com.example.demo.Model.Offre;

import java.time.Instant;
import java.util.List;

public class ReservationOffreVol extends ReservationOffre {


    private int nombre_passager ;

     private List<Client> clients ;

    public List<Client> getClients() {
        return clients;
    }

    public void setClients(List<Client> clients) {
        this.clients = clients;
    }

    public int getNombre_passager() {
        return nombre_passager;
    }

    public void setNombre_passager(int nombre_passager) {
        this.nombre_passager = nombre_passager;
    }


    public int getNb_passager() {
        return nombre_passager;
    }

    public void setNb_passager(int nb_passager) {
        this.nombre_passager = nb_passager;
    }


    @Override
    public double calculerPrix(Offre offre) {
        return (offre.getPrix() * (100.0 - offre.getPromotion()) / 100.0) *nombre_passager;
    }

}
