package com.example.demo.Dto;


import com.example.demo.Model.Paiement;

public class PaiementDto {
    private Integer id;

    private double montant ;

    private String PaiementID;

    private ReservationDto reservation ;

    private UtilisateurDto client ;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public double getMontant() {
        return montant;
    }

    public void setMontant(double montant) {
        this.montant = montant;
    }

    public String getPaiementID() {
        return PaiementID;
    }

    public void setPaiementID(String paiementID) {
        this.PaiementID = paiementID;
    }

    public ReservationDto getReservation() {
        return reservation;
    }

    public void setReservation(ReservationDto reservation) {
        this.reservation = reservation;
    }

    public UtilisateurDto getClient() {
        return client;
    }

    public void setClient(UtilisateurDto client) {
        this.client = client;
    }

    public  static  PaiementDto fromEntity(Paiement paiement){
        PaiementDto paiementDto = new PaiementDto() ;
        paiementDto.setId(paiement.getId());
        paiementDto.setClient(UtilisateurDto.fromEntity(paiement.getClient()));
        paiementDto.setMontant(paiement.getMontant());
        paiementDto.setPaiementID(paiementDto.getPaiementID());
        paiementDto.setReservation(ReservationDto.fromEntity(paiement.getReservation()));
        return  paiementDto ;

    }



    public  static  Paiement toEntity(PaiementDto paiementDt){
        Paiement paiement = new Paiement() ;
        paiement.setId(paiementDt.getId());
        paiement.setClient(UtilisateurDto.toEntity(paiementDt.getClient()));
        paiement.setMontant(paiementDt.getMontant());
        paiement.setPaiementId(paiementDt.getPaiementID());
        paiement.setReservation(ReservationDto.toEntity(paiementDt.getReservation()));

        return  paiement ;

    }



}
