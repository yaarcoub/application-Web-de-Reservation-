package com.example.demo.Dto;

import java.time.Instant;
import java.time.LocalDateTime;

public class OffreVolMongo extends OffreMongo {
    private LocalDateTime dateDepart ;
    private LocalDateTime dateArrive ;
    private String AdresseDepart ;

    private  String AdresseArrive ;
    private double DureVol ;
    private String classe;
    private String paysDepart;
    private String paysArrivee;

    public LocalDateTime getDateDepart() {
        return dateDepart;
    }

    public void setDateDepart(LocalDateTime dateDepart) {
        this.dateDepart = dateDepart;
    }

    public LocalDateTime getDateArrive() {
        return dateArrive;
    }

    public void setDateArrive(LocalDateTime dateArrive) {
        this.dateArrive = dateArrive;
    }

    public String getAdresseDepart() {
        return AdresseDepart;
    }

    public void setAdresseDepart(String adresseDepart) {
        AdresseDepart = adresseDepart;
    }

    public String getAdresseArrive() {
        return AdresseArrive;
    }

    public void setAdresseArrive(String adresseArrive) {
        AdresseArrive = adresseArrive;
    }

    public double getDureVol() {
        return DureVol;
    }

    public void setDureVol(double dureVol) {
        DureVol = dureVol;
    }

    public String getClasse() {
        return classe;
    }

    public void setClasse(String classe) {
        this.classe = classe;
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
}
