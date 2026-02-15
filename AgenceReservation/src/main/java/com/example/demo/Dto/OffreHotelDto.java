package com.example.demo.Dto;

import com.example.demo.Model.OffreHotel;
import com.example.demo.Utils.TypeOffre;

public class OffreHotelDto extends OffreDto{

    private String nomHotel;

    private int nombreEtoiles;
    private String ville;
    private boolean disponible ;

    private boolean petitDejeunerInclus;
    private String adresse;
    private String pays;
    private String telephone;
    private String email;
    private boolean wifiInclus;
    private boolean parkingDisponible;
    private boolean piscine;
    private boolean serviceChambre;
    private int nombreChambres;
    private String typeChambre;
    private int capaciteChambre;


    public  static  OffreHotelDto fromEntity(OffreHotel offreHotel){

        OffreHotelDto offreHotelDto = new OffreHotelDto();
        offreHotelDto.setPrix(offreHotel.getPrix());
        offreHotelDto.setAdresse(offreHotel.getAdresse());
        offreHotelDto.setNomHotel(offreHotel.getNomHotel());
        offreHotelDto.setDisponible(offreHotel.isDisponible());

        offreHotelDto.setDescription(offreHotel.getDescription());
        offreHotelDto.setTitre(offreHotel.getTitre());

        offreHotelDto.setDDS(offreHotel.getDDS());
        offreHotelDto.setId(offreHotel.getId());
        offreHotelDto.setDescription(offreHotel.getDescription());
        offreHotelDto.setCapaciteChambre(offreHotel.getCapaciteChambre());

        offreHotelDto.setEmail(offreHotel.getEmail());
        offreHotelDto.setPays(offreHotel.getPays());
        offreHotelDto.setNombreEtoiles(offreHotel.getNombreEtoiles());
        offreHotelDto.setNombreChambres(offreHotel.getNombreChambres());
        offreHotelDto.setParkingDisponible(offreHotel.isParkingDisponible());

        offreHotelDto.setPetitDejeunerInclus(offreHotel.isPetitDejeunerInclus());
        offreHotelDto.setPiscine(offreHotel.isPiscine());
        offreHotelDto.setTelephone(offreHotel.getTelephone());
        offreHotelDto.setVille(offreHotel.getVille());
        offreHotelDto.setWifiInclus(offreHotel.isWifiInclus());
        offreHotelDto.setTypeChambre(offreHotel.getTypeChambre());

        offreHotelDto.setTypeOffre(TypeOffre.HOTEL);

        return offreHotelDto ;
    }

    public  static  OffreHotel toEntity(OffreHotelDto offreHotelDto){

        OffreHotel offreHotel = new OffreHotel();
        offreHotel.setPrix(offreHotelDto.getPrix());
        offreHotel.setAdresse(offreHotelDto.getAdresse());
        offreHotel.setNomHotel(offreHotelDto.getNomHotel());
        offreHotel.setDisponible(offreHotelDto.isDisponible());

        offreHotel.setDescription(offreHotelDto.getDescription());
        offreHotel.setTitre(offreHotelDto.getTitre());

        offreHotel.setDDS(offreHotelDto.getDDS());
        offreHotel.setId(offreHotelDto.getId());
        offreHotel.setDescription(offreHotelDto.getDescription());
        offreHotel.setCapaciteChambre(offreHotelDto.getCapaciteChambre());
        offreHotel.setEmail(offreHotelDto.getEmail());
        offreHotel.setPays(offreHotelDto.getPays());
        offreHotel.setNombreEtoiles(offreHotelDto.getNombreEtoiles());
        offreHotel.setNombreChambres(offreHotelDto.getNombreChambres());

        offreHotel.setParkingDisponible(offreHotelDto.isParkingDisponible());
        offreHotel.setPetitDejeunerInclus(offreHotelDto.isPetitDejeunerInclus());
        offreHotel.setPiscine(offreHotelDto.isPiscine());
        offreHotel.setTelephone(offreHotelDto.getTelephone());

        offreHotel.setVille(offreHotelDto.getVille());
        offreHotel.setWifiInclus(offreHotelDto.isWifiInclus());
        offreHotel.setTypeChambre(offreHotelDto.getTypeChambre());
        offreHotel.setTypeOffre(offreHotelDto.getTypeOffre());

        offreHotel.setTypeOffre(TypeOffre.HOTEL);
        return offreHotel ;

    }


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


}
