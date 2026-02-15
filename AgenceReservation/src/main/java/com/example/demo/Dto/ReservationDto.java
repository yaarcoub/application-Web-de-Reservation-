package com.example.demo.Dto;




import com.example.demo.Model.Reservation;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

public class ReservationDto {


     private Integer id;

    private double montantTotal;
    private UtilisateurDto client ;

    public double getMontantTotal() {
        return montantTotal;
    }

    public void setMontantTotal(double montantTotal) {
        this.montantTotal = montantTotal;
    }

    @JsonIgnore
    private List<LigneReservationDto> ligneReservationDto ;

    @JsonIgnore
    private PaiementDto paiement;

    public UtilisateurDto getClient() {
        return client;
    }

    public void setClient(UtilisateurDto client) {
        this.client = client;
    }

    public List<LigneReservationDto> getLigneReservationDto() {
        return ligneReservationDto;
    }

    public void setLigneReservationDto(List<LigneReservationDto> ligneReservationDto) {
        this.ligneReservationDto = ligneReservationDto;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public PaiementDto getPaiement() {
        return paiement;
    }

    public void setPaiement(PaiementDto paiement) {
        this.paiement = paiement;
    }

    public  static  ReservationDto fromEntity(Reservation reservation){

        ReservationDto reservationDto = new ReservationDto();
        reservationDto.setClient(UtilisateurDto.fromEntity(reservation.getClient()));
        reservationDto.setId(reservation.getId());
        reservationDto.setMontantTotal(reservation.getMontantTotal());
        return  reservationDto ;
    }
    public  static  Reservation toEntity(ReservationDto reservationDt){

        Reservation reservation = new Reservation();
        reservation.setClient(UtilisateurDto.toEntity(reservationDt.getClient()));
        reservation.setId(reservationDt.getId());
        reservation.setMontantTotal(reservationDt.getMontantTotal());
        return  reservation ;
    }


}
