package com.example.demo.Services;

import com.example.demo.Dto.*;
import com.example.demo.Model.LigneReservation;
import com.example.demo.Model.Offre;
import com.example.demo.Model.Reservation;
import com.example.demo.Model.Utilisateur;
import com.example.demo.Utils.TypeOffre;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;

public interface LigneReservationService<T> {

    public List<LigneReservationDto> getAllReservationDetails(ReservationDto reservationDto );



    public void confirmLigneReservation(LigneReservation reservation) throws JsonProcessingException;
    public  void   save( Reservation reservation,context ctx , T offreDto) throws Exception;
    public byte[] pdfLigneReservation( LigneReservation ligneReservation) throws Exception;
    public TypeOffre getSupportedType();
    public  void  DeleteLigneReservation(LigneReservationDto ligneReservationDto);

}
