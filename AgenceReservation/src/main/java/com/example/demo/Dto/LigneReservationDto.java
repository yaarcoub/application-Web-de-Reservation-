package com.example.demo.Dto;


import com.example.demo.Model.LigneReservation;
import com.example.demo.Utils.StatusReservation;

import java.time.Instant;

public class LigneReservationDto {
    private int id;
    private Instant creationDate;
    private Instant lastModifiedDate;

    private StatusReservation status;

    public StatusReservation getStatus() {
        return status;
    }

    public void setStatus(StatusReservation status) {
        this.status = status;
    }

    private double prixUnitaire;
    private String codeReservation ;

    private StatusReservation statut;
    private ReservationDto reservation ;
    private OffreDto offre;


    public double getPrixUnitaire() {
        return prixUnitaire;
    }

    public void setPrixUnitaire(double prixUnitaire) {
        this.prixUnitaire = prixUnitaire;
    }

    public String getCodeReservation() {
        return codeReservation;
    }

    public void setCodeReservation(String codeReservation) {
        this.codeReservation = codeReservation;
    }

    public StatusReservation getStatut() {
        return statut;
    }

    public void setStatut(StatusReservation statut) {
        this.statut = statut;
    }

    public ReservationDto getReservation() {
        return reservation;
    }

    public void setReservation(ReservationDto reservation) {
        this.reservation = reservation;
    }

    public OffreDto getOffre() {
        return offre;
    }

    public void setOffre(OffreDto offre) {
        this.offre = offre;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Instant getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Instant creationDate) {
        this.creationDate = creationDate;
    }

    public Instant getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(Instant lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }




    public  static  LigneReservationDto fromEntity(LigneReservation ligneReservation){
        LigneReservationDto ligneReservationDto = new LigneReservationDto();
        ligneReservationDto.setId(ligneReservation.getId());
        ligneReservationDto.setCodeReservation(ligneReservation.getCodeReservation());
        ligneReservationDto.setOffre(OffreDto.fromEntity(ligneReservation.getOffre()));
        ligneReservationDto.setPrixUnitaire(ligneReservation.getPrixReel());
        ligneReservationDto.setReservation(ReservationDto.fromEntity(ligneReservation.getReservation()));
        return  ligneReservationDto ;

    }

    public  static  LigneReservation toEntity(LigneReservationDto ligneReservationDto){
        LigneReservation ligneReservation = new LigneReservation();
        ligneReservation.setId(ligneReservationDto.getId());
        ligneReservation.setCodeReservation(ligneReservationDto.getCodeReservation());
        ligneReservation.setOffre(OffreDto.toEntity(ligneReservationDto.getOffre()));
        ligneReservation.setPrixReel(ligneReservationDto.getPrixUnitaire());
        ligneReservation.setReservation(ReservationDto.toEntity(ligneReservationDto.getReservation()));
        return  ligneReservation ;

    }


}
