package com.example.demo.Dto;

import com.example.demo.Utils.StatusReservation;

import java.util.ArrayList;
import java.util.List;

public class ReservationSendStep1 {


    private UserApp userApp;
    private  int idReservation;
    private double Prix ;


    private List<LigneReservationStep1> reservationSendStep1List ;

    public ReservationSendStep1(){
        this.reservationSendStep1List = new ArrayList<>();
    }
    public List<LigneReservationStep1> getReservationSendStep1List() {
        return reservationSendStep1List;
    }

    public void setReservationSendStep1List(List<LigneReservationStep1> reservationSendStep1List) {
        this.reservationSendStep1List = reservationSendStep1List;
    }


    public double getPrix() {
        return Prix;
    }
    public void setPrix(double prix) {
        Prix = prix;
    }
    public UserApp getUserApp() {
        return userApp;
    }
    public void setUserApp(UserApp userApp) {
        this.userApp = userApp;
    }

    public int getIdReservation() {
        return idReservation;
    }
    public void setIdReservation(int idReservation) {
        this.idReservation = idReservation;
    }
    public double getTotalePaix() {
        return Prix;
    }

    public void setTotalePaix(double totalePaix) {
        this.Prix = totalePaix;
    }

}
