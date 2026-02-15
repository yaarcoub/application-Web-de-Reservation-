package com.example.demo.Validator;
import com.example.demo.Dto.OffreVolDto;
import com.mysql.cj.util.StringUtils;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
public class OffreVolValidator {

    public static List<String> validate(OffreVolDto offreVolDto) {
        List<String> errors = new ArrayList<>();

        if (offreVolDto == null) {
            errors.add("L'offre de vol ne doit pas être nulle.");
            return errors;
        }

        if (StringUtils.isEmptyOrWhitespaceOnly(offreVolDto.getCompagnie())) {
            errors.add("Le nom de la compagnie est obligatoire.");
        }
        if (StringUtils.isEmptyOrWhitespaceOnly(offreVolDto.getADD())) {
            errors.add("L'aéroport de départ (ADD) est obligatoire.");
        }
        if (StringUtils.isEmptyOrWhitespaceOnly(offreVolDto.getADA())) {
            System.out.println("#########################################"+offreVolDto.getADA());
            errors.add("L'aéroport d'arrivée (ADA) est obligatoire.");
        }
        if (offreVolDto.getDDD() == null) {
            errors.add("La date de départ (DDD) est obligatoire.");
        }
        if (offreVolDto.getDDA() == null) {
            errors.add("La date d'arrivée (DDA) est obligatoire.");
        } else if (offreVolDto.getDDD() != null && offreVolDto.getDDA().isBefore(offreVolDto.getDDD())) {
            errors.add("La date d'arrivée doit être postérieure à la date de départ.");
        }

        if (StringUtils.isEmptyOrWhitespaceOnly(offreVolDto.getNumeroVol())) {
            errors.add("Le numéro de vol est obligatoire.");
        }
        if (StringUtils.isEmptyOrWhitespaceOnly(offreVolDto.getTypeAvion())) {
            errors.add("Le type d'avion est obligatoire.");
        }
        if (offreVolDto.getDureeVol() <= 0) {
            errors.add("La durée du vol doit être supérieure à 0.");
        }
        if (StringUtils.isEmptyOrWhitespaceOnly(offreVolDto.getClasse())) {
            errors.add("La classe (économique, business, etc.) est obligatoire.");
        }
        if (offreVolDto.getNombrePlacesDisponibles() <= 0) {
            errors.add("Le nombre de places disponibles doit être supérieur à 0.");
        }
        if (StringUtils.isEmptyOrWhitespaceOnly(offreVolDto.getPaysDepart())) {
            errors.add("Le pays de départ est obligatoire.");
        }
        if (StringUtils.isEmptyOrWhitespaceOnly(offreVolDto.getPaysArrivee())) {
            errors.add("Le pays d'arrivée est obligatoire.");
        }

        // Champs hérités de OffreDto (si présents)
        if (StringUtils.isEmptyOrWhitespaceOnly(offreVolDto.getTitre())) {
            errors.add("Le titre de l'offre est obligatoire.");
        }
        if (StringUtils.isEmptyOrWhitespaceOnly(offreVolDto.getDescription())) {
            errors.add("La description de l'offre est obligatoire.");
        }

        return errors;
    }


}
