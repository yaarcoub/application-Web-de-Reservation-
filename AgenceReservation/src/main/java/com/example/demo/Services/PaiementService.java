package com.example.demo.Services;

import com.example.demo.Dto.PaiementDto;
import com.example.demo.Dto.ReservationDto;
import com.example.demo.Dto.UtilisateurDto;
import com.example.demo.Model.Reservation;
import com.example.demo.Model.Utilisateur;

import java.util.List;

public interface PaiementService {
    public PaiementDto Save(String PaiementID , Reservation reservationDto, Utilisateur client);

    public List<PaiementDto> getAllClientPaiement(UtilisateurDto utilisateurDto);


}
