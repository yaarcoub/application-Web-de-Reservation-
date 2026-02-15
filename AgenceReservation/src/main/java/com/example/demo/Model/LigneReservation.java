package com.example.demo.Model;

import com.example.demo.Utils.StatusReservation;
import jakarta.persistence.*;

import java.time.Instant;
import java.time.LocalDateTime;


@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class LigneReservation extends AbstractEntity {


    private double prixReel;
    private double prixPromotion;
    //code unique pour chaque reservation
    private String codeReservation ;
    private LocalDateTime dateExpiration ;

    private StatusReservation status ;

    private String Nom ;
    private String prénom ;
    private  int age ;
    private String Genre ;
    private String pays ;


    public String getNom() {
        return Nom;
    }

    public void setNom(String nom) {
        Nom = nom;
    }

    public String getPrénom() {
        return prénom;
    }

    public void setPrénom(String prénom) {
        this.prénom = prénom;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGenre() {
        return Genre;
    }

    public void setGenre(String genre) {
        Genre = genre;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public StatusReservation getStatus() {
        return status;
    }

    public void setStatus(StatusReservation status) {
        this.status = status;
    }

    @ManyToOne
    @JoinColumn(name = "idReservation")
    private Reservation reservation ;

    @ManyToOne
    @JoinColumn(name = "idoffer")
    private Offre offre;






    public double getPrixReel() {
        return prixReel;
    }

    public void setPrixReel(double prixReel) {
        this.prixReel = prixReel;
    }

    public String getCodeReservation() {
        return codeReservation;
    }

    public void setCodeReservation(String codeReservation) {
        this.codeReservation = codeReservation;
    }



    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    public Offre getOffre() {
        return offre;
    }

    public void setOffre(Offre offre) {
        this.offre = offre;
    }

    public double getPrixPromotion() {
        return prixPromotion;
    }

    public void setPrixPromotion(double prixPromotion) {
        this.prixPromotion = prixPromotion;
    }

    public LocalDateTime getDateExpiration() {
        return dateExpiration;
    }

    public void setDateExpiration(LocalDateTime dateExpiration) {
        this.dateExpiration = dateExpiration;
    }
}
