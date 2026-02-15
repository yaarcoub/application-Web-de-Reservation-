package com.example.demo.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;


import java.time.Instant;
import java.time.LocalDateTime;
import java.time.chrono.ChronoLocalDateTime;
import java.util.Date;
@Entity
public class OffreVol extends  Offre{
    public String getCompagnie() {
        return compagnie;
    }

    public void setCompagnie(String compagnie) {
        this.compagnie = compagnie;
    }

    public String getADD() {
        return ADD;
    }

    public void setADD(String ADD) {
        this.ADD = ADD;
    }

    public String getADA() {
        return ADA;
    }

    public void setADA(String ADA) {
        this.ADA = ADA;
    }

    public LocalDateTime getDDA() {
        return DDA;
    }

    public void setDDA(LocalDateTime DDA) {
        this.DDA = DDA;
    }

    public LocalDateTime getDDD() {
        return DDD;
    }

    public void setDDD(LocalDateTime DDD) {
        this.DDD = DDD;
    }

    public String getNumeroVol() {
        return numeroVol;
    }

    public void setNumeroVol(String numeroVol) {
        this.numeroVol = numeroVol;
    }

    public String getTypeAvion() {
        return typeAvion;
    }

    public void setTypeAvion(String typeAvion) {
        this.typeAvion = typeAvion;
    }

    public double getDureeVol() {
        return dureeVol;
    }

    public void setDureeVol(double dureeVol) {
        this.dureeVol = dureeVol;
    }

    public String getClasse() {
        return classe;
    }

    public void setClasse(String classe) {
        this.classe = classe;
    }

    public int getNombrePlacesDisponibles() {
        return nombrePlacesDisponibles;
    }

    public void setNombrePlacesDisponibles(int nombrePlacesDisponibles) {
        this.nombrePlacesDisponibles = nombrePlacesDisponibles;
    }

    public String getPaysDepart() {
        return paysDepart;
    }

    public void setPaysDepart(String paysDepart) {
        this.paysDepart = paysDepart;
    }

    public String getPaysArrivee() {
        return paysArrivee;
    }

    public void setPaysArrivee(String paysArrivee) {
        this.paysArrivee = paysArrivee;
    }

    private String compagnie ;
    //aéroport de départ
    @Column(name="aéroport_depart")
    private  String ADD ;
    //Aéroport d'arrivée
    @Column(name="aéroport_arrive")
    private String ADA ;
    //date d'aarivée
    private LocalDateTime DDA ;
    //date de départ
    private LocalDateTime DDD ;
    private String numeroVol;       // Numéro du vol ( AF1234)
    private String typeAvion;       // Type d'avion ( Airbus A320)
    private double dureeVol;
    private String classe;
    private int nombrePlacesDisponibles;
    private String paysDepart;
    private String paysArrivee;

}


