package com.example.demo.Dto;

import com.example.demo.Model.Reservation;

public class ReservationResult {

    private byte[] pdf ;
    private Reservation reservation ;

    public byte[] getPdf() {
        return pdf;
    }

    public void setPdf(byte[] pdf) {
        this.pdf = pdf;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    public ReservationResult(byte[] pdf, Reservation reservation) {
        this.pdf = pdf;
        this.reservation = reservation;
    }


}
