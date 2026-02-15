package com.example.demo.Validator;

import com.example.demo.Dto.PaiementDto;
import com.mysql.cj.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class PaiementValidator {

    public static List<String> validate(PaiementDto paiementDto) {
        List<String> errors = new ArrayList<>();

        // Vérifier si l’objet est null
        if (paiementDto == null) {
            errors.add("Le paiement ne doit pas être nul.");
            return errors;
        }

        // 🔹 Vérifier le montant
        if (paiementDto.getMontant() <= 0) {
            errors.add("Le montant du paiement doit être supérieur à 0.");
        }

        // 🔹 Vérifier le numéro de transaction
        if (StringUtils.isEmptyOrWhitespaceOnly(paiementDto.getPaiementID())) {
            errors.add("Le numéro de transaction est obligatoire.");
        }

        // 🔹 Vérifier la réservation associée
        if (paiementDto.getReservation() == null) {
            errors.add("Le paiement doit être associé à une réservation.");
        } else if (paiementDto.getReservation().getId() == null) {
            errors.add("L’identifiant de la réservation associée est obligatoire.");
        }

        // 🔹 Vérifier le client associé
        if (paiementDto.getClient() == null) {
            errors.add("Le paiement doit être lié à un client.");
        } else if (StringUtils.isEmptyOrWhitespaceOnly(paiementDto.getClient().getEmail())) {
            errors.add("L’email du client associé est obligatoire.");
        }

        return errors;
    }
}
