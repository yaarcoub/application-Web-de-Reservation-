package com.example.demo.Validator;

import com.example.demo.Dto.LigneReservationDto;
import com.mysql.cj.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class LigneReservationValidator {

    public static List<String> validate(LigneReservationDto ligneReservationDto) {
        List<String> errors = new ArrayList<>();

        // 🔹 Vérification de l'objet principal
        if (ligneReservationDto == null) {
            errors.add("La ligne de réservation ne doit pas être nulle.");
            return errors;
        }

        // 🔹 Vérifier le code de réservation
        if (StringUtils.isEmptyOrWhitespaceOnly(ligneReservationDto.getCodeReservation())) {
            errors.add("Le code de réservation est obligatoire.");
        }

        // 🔹 Vérifier le prix unitaire
        if (ligneReservationDto.getPrixUnitaire() <= 0) {
            errors.add("Le prix unitaire doit être supérieur à 0.");
        }

        // 🔹 Vérifier le statut
        if (ligneReservationDto.getStatut() == null) {
            errors.add("Le statut de la ligne de réservation est obligatoire.");
        }

        // 🔹 Vérifier l’offre associée
        if (ligneReservationDto.getOffre() == null) {
            errors.add("Une offre doit être associée à la ligne de réservation.");
        } else if (StringUtils.isEmptyOrWhitespaceOnly(ligneReservationDto.getOffre().getTitre())) {
            errors.add("Le titre de l’offre associée est obligatoire.");
        }

        // 🔹 Vérifier la réservation liée
        if (ligneReservationDto.getReservation() == null) {
            errors.add("Chaque ligne de réservation doit être rattachée à une réservation.");
        }

        return errors;
    }
}
