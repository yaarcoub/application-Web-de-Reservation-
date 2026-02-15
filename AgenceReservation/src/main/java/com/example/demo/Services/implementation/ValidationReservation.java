package com.example.demo.Services.implementation;


import com.example.demo.Model.LigneReservation;
import com.example.demo.Repo.LigneReservationRepo;
import com.example.demo.Utils.StatusReservation;
import com.example.demo.exception.ErrorCode;
import com.example.demo.exception.InvalidEntityException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class ValidationReservation {

    @Autowired
    private LigneReservationRepo ligneReservationRepo;

    public LigneReservation valider(String reference) {

        LigneReservation ligneReservation =
                ligneReservationRepo.findByCodeReservation(reference);

        if (ligneReservation == null) {
            throw new InvalidEntityException("cette Reservation ne exist pas dans notre system ", ErrorCode.RESERVATION_NOT_FOUND);
        }

        LocalDateTime maintenant = LocalDateTime.now();

        if(ligneReservation.getDateExpiration()==null || ligneReservation.getDateExpiration().isBefore(maintenant)){
            ligneReservation.setStatus(StatusReservation.EXPIRED);
        }

        return ligneReservationRepo.save(ligneReservation);
    }
}

