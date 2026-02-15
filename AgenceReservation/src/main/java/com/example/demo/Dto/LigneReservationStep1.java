package com.example.demo.Dto;

import com.example.demo.Model.LigneReservation;
import com.example.demo.Utils.StatusReservation;
import com.example.demo.Utils.TypeOffre;

import java.time.Instant;

public class LigneReservationStep1 {

    private int id;
    private Instant creationDate;
    private Instant lastModifiedDate;
    private StatusReservation status;
    private double prixUnitaire;
    private String codeReservation ;
    private TypeOffre offre;
    private Client client ;

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
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

    public StatusReservation getStatus() {
        return status;
    }

    public void setStatus(StatusReservation status) {
        this.status = status;
    }

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



    public TypeOffre getOffre() {
        return offre;
    }

    public void setOffre(TypeOffre offre) {
        this.offre = offre;
    }

    public  static LigneReservationStep1 fromEntity(LigneReservation ligneReservation){

        LigneReservationStep1 ligneReservationStep1 = new LigneReservationStep1();

        Client client1 = new Client() ;
        client1.setNom(ligneReservation.getNom());
        client1.setAge(ligneReservation.getAge());
        client1.setPays(ligneReservation.getPays());
        client1.setGenre(ligneReservation.getGenre());
        client1.setPrenom(ligneReservation.getPrénom());

        ligneReservationStep1.setClient(client1);
        ligneReservationStep1.setId(ligneReservation.getId());
        ligneReservationStep1.setCodeReservation(ligneReservation.getCodeReservation());
        ligneReservationStep1.setOffre(ligneReservation.getOffre().getTypeOffre());
        ligneReservationStep1.setPrixUnitaire(ligneReservation.getPrixReel());
        ligneReservationStep1.setStatus(ligneReservation.getStatus());
        ligneReservationStep1.setCreationDate(ligneReservation.getCreationDate());
        ligneReservationStep1.setCreationDate(ligneReservation.getLastModifiedDate());

        return  ligneReservationStep1 ;

    }


}
