package com.example.demo.Dto;

import com.example.demo.Utils.StatusReservation;

public class UpdateReservationMessage {

   private int idReservation ;
   private int idLigneReservation ;
   private StatusReservation statusReservation ;



    public int getIdReservation() {
        return idReservation;
    }

    public void setIdReservation(int idReservation) {
        this.idReservation = idReservation;
    }

    public int getIdLigneReservation() {
        return idLigneReservation;
    }

    public void setIdLigneReservation(int idLigneReservation) {
        this.idLigneReservation = idLigneReservation;
    }

    public StatusReservation getStatusReservation() {
        return statusReservation;
    }

    public void setStatusReservation(StatusReservation statusReservation) {
        this.statusReservation = statusReservation;
    }
}
