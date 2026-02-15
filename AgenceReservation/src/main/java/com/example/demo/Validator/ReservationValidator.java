package com.example.demo.Validator;

import com.example.demo.Dto.ReservationDto;
import com.example.demo.Dto.UtilisateurDto;
import com.example.demo.Dto.LigneReservationDto;
import com.mysql.cj.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class ReservationValidator {

    public static List<String> validate(ReservationDto reservationDto) {
        List<String> errors = new ArrayList<>();

        if (reservationDto == null) {
            errors.add("La réservation ne doit pas être nulle.");
            return errors;
        }


        // 🔹 Vérifier le montant total
        if (reservationDto.getMontantTotal() <= 0) {
            errors.add("Le montant total de la réservation doit être supérieur à 0.");
        }

        // 🔹 Vérifier les lignes de réservation
        if (reservationDto.getLigneReservationDto() == null || reservationDto.getLigneReservationDto().isEmpty()) {
            errors.add("La réservation doit contenir au moins une ligne de réservation.");
        } else {
            // Vérification de chaque ligne
            for (LigneReservationDto ligne : reservationDto.getLigneReservationDto()) {

            }
        }

        return errors;
    }
}
