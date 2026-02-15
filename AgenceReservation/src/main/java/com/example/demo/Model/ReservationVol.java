package com.example.demo.Model;
import jakarta.persistence.Entity;

import java.time.Instant;
import java.time.LocalDateTime;


@Entity
public class ReservationVol extends LigneReservation{

    private LocalDateTime dateDepart ;
    private LocalDateTime dateArrivee ;
    private  String CodePassport;



    public String getCodePassport() {
        return CodePassport;
    }
    public void setCodePassport(String codePassport) {
        CodePassport = codePassport;
    }

    public LocalDateTime getDateDepart() {
        return dateDepart;
    }

    public void setDateDepart(LocalDateTime dateDepart) {
        this.dateDepart = dateDepart;
    }

    public LocalDateTime getDateArrivee() {
        return dateArrivee;
    }

    public void setDateArrivee(LocalDateTime dateArrivee) {
        this.dateArrivee = dateArrivee;
    }


}
