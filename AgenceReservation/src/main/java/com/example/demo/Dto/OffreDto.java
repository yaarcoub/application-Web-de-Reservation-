package com.example.demo.Dto;


import com.example.demo.Model.LigneReservation;
import com.example.demo.Model.Offre;
import com.example.demo.Utils.TypeOffre;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;


public class OffreDto {
    private Integer id;

    private  String  titre ;




    private  double prix ;

    private TypeOffre typeOffre;


    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    private String description ;

    private LocalDateTime DDS ;

    private  int promotion ;
    @JsonIgnore
    private List<LigneReservationDto> ligneReservation ;

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDDS() {
        return DDS;
    }

    public void setDDS(LocalDateTime DDS) {
        this.DDS = DDS;
    }

    public int getPromotion() {
        return promotion;
    }

    public void setPromotion(int promotion) {
        this.promotion = promotion;
    }

    public List<LigneReservationDto> getLigneReservation() {
        return ligneReservation;
    }

    public TypeOffre getTypeOffre() {
        return typeOffre;
    }

    public void setTypeOffre(TypeOffre typeOffre) {
        this.typeOffre = typeOffre;
    }

    public void setLigneReservation(List<LigneReservationDto> ligneReservation) {
        this.ligneReservation = ligneReservation;
    }

    public  static  OffreDto fromEntity(Offre offre){
        OffreDto offreDto = new OffreDto();
        offreDto.setId(offre.getId());
        offreDto.setDescription(offre.getDescription());
        offreDto.setPromotion(offre.getPromotion());
        offreDto.setTitre(offre.getTitre());
        offreDto.setPrix(offre.getPrix());
        offreDto.setTypeOffre(offre.getTypeOffre());
        return offreDto ;
    }
    public  static  Offre toEntity(OffreDto offreDto){
        Offre offre = new Offre() ;
        offre.setId(offreDto.getId());
        offre.setDescription(offreDto.getDescription());
        offre.setPromotion(offreDto.getPromotion());
        offre.setTitre(offreDto.getTitre());
        offre.setPrix(offreDto.getPrix());
        offre.setTypeOffre(offreDto.typeOffre);
        return offre ;
    }






}
