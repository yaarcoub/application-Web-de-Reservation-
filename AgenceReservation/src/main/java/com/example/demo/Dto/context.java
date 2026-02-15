package com.example.demo.Dto;

import com.example.demo.Model.Utilisateur;

import java.util.List;

public class context {

   private  List<ReservationOffre> reservationOffre;
   private   double prixTotal ;
   private   Utilisateur client ;

   private ReservationSendStep1 reservationSendStep1 ;

   private String UrL ;
   private String PaiementId ;

    public String getPaiementId() {
        return PaiementId;
    }

    public void setPaiementId(String paiementId) {
        PaiementId = paiementId;
    }

    public String getUrL() {
        return UrL;
    }

    public void setUrL(String urL) {
        UrL = urL;
    }

    public ReservationSendStep1 getReservationSendStep1() {
        return reservationSendStep1;
    }

    public void setReservationSendStep1(ReservationSendStep1 reservationSendStep1) {
        this.reservationSendStep1 = reservationSendStep1;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    private String orderId ;


    public List<ReservationOffre> getReservationOffre() {
        return reservationOffre;
    }

    public void setReservationOffre(List<ReservationOffre> reservationOffre) {
        this.reservationOffre = reservationOffre;
    }

    public double getPrixTotal() {
        return prixTotal;
    }

    public void setPrixTotal(double prixTotal) {
        this.prixTotal = prixTotal;
    }

    public Utilisateur getClient() {
        return client;
    }

    public void setClient(Utilisateur client) {
        this.client = client;
    }
}
