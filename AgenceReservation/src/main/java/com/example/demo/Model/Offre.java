package com.example.demo.Model;

import com.example.demo.Utils.TypeOffre;
import jakarta.persistence.*;


import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
@Entity

@Inheritance(strategy = InheritanceType.JOINED)
public  class Offre extends AbstractEntity{

    private  String  titre ;

    private double prix;

     @OneToMany(mappedBy = "offre")
     private List<ImageOffre> imageOffre;
    @Enumerated(EnumType.STRING)
    private TypeOffre typeOffre;

    public TypeOffre getTypeOffre() {
        return typeOffre;
    }

    public void setTypeOffre(TypeOffre typeOffre) {
        this.typeOffre = typeOffre;
    }

    public double getPrix() {
        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    private String description ;

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

    public List<LigneReservation> getLigneReservation() {
        return ligneReservation;
    }

    public void setLigneReservation(List<LigneReservation> ligneReservation) {
        this.ligneReservation = ligneReservation;
    }
//date de suspension
 @Column(name = "Date_Suspension")
 private LocalDateTime DDS ;

    private  int promotion ;

    @OneToMany(mappedBy = "offre")
    private List<LigneReservation> ligneReservation ;

}
