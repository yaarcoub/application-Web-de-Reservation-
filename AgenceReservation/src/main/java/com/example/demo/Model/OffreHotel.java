package com.example.demo.Model;


import jakarta.persistence.Entity;


@Entity

public class OffreHotel extends  Offre{

    private String nomHotel;
    private int nombreEtoiles;
    private String ville;
    private boolean disponible ;

    private boolean petitDejeunerInclus;
    private String adresse;
    private String pays;
    private String telephone;
    private String email;
    private boolean wifiInclus;          // Wi-Fi gratuit
    private boolean parkingDisponible;   // Parking disponible
    private boolean piscine;             // Piscine disponible
    private boolean salleDeSport;
    private boolean serviceChambre;
    private int nombreChambres;
    private String typeChambre;
    private int capaciteChambre;

    public String getNomHotel() {
        return nomHotel;
    }

    public void setNomHotel(String nomHotel) {
        this.nomHotel = nomHotel;
    }

    public int getNombreEtoiles() {
        return nombreEtoiles;
    }

    public void setNombreEtoiles(int nombreEtoiles) {
        this.nombreEtoiles = nombreEtoiles;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public boolean isDisponible() {
        return disponible;
    }

    public void setDisponible(boolean disponible) {
        this.disponible = disponible;
    }



    public boolean isPetitDejeunerInclus() {
        return petitDejeunerInclus;
    }

    public void setPetitDejeunerInclus(boolean petitDejeunerInclus) {
        this.petitDejeunerInclus = petitDejeunerInclus;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isWifiInclus() {
        return wifiInclus;
    }

    public void setWifiInclus(boolean wifiInclus) {
        this.wifiInclus = wifiInclus;
    }

    public boolean isParkingDisponible() {
        return parkingDisponible;
    }

    public void setParkingDisponible(boolean parkingDisponible) {
        this.parkingDisponible = parkingDisponible;
    }

    public boolean isPiscine() {
        return piscine;
    }

    public void setPiscine(boolean piscine) {
        this.piscine = piscine;
    }

    public boolean isSalleDeSport() {
        return salleDeSport;
    }

    public void setSalleDeSport(boolean salleDeSport) {
        this.salleDeSport = salleDeSport;
    }

    public boolean isServiceChambre() {
        return serviceChambre;
    }

    public void setServiceChambre(boolean serviceChambre) {
        this.serviceChambre = serviceChambre;
    }

    public int getNombreChambres() {
        return nombreChambres;
    }

    public void setNombreChambres(int nombreChambres) {
        this.nombreChambres = nombreChambres;
    }

    public String getTypeChambre() {
        return typeChambre;
    }

    public void setTypeChambre(String typeChambre) {
        this.typeChambre = typeChambre;
    }

    public int getCapaciteChambre() {
        return capaciteChambre;
    }

    public void setCapaciteChambre(int capaciteChambre) {
        this.capaciteChambre = capaciteChambre;
    }



    //getter setter


}
