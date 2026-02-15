package com.example.demo.Validator;

import com.example.demo.Dto.OffreHotelDto;
import com.mysql.cj.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class OffreHotelValidator {


    public  static List<String> validator(OffreHotelDto offreHotelDto){
        List<String> errors = new ArrayList<>() ;

        if (offreHotelDto == null) {
            errors.add("L'offre de Hotel ne doit pas être nulle.");
            return errors;
        }

        if(StringUtils.isEmptyOrWhitespaceOnly(offreHotelDto.getNomHotel())){
            errors.add("Hotel Name c'est un champ obligatoire ");
        }
        if(StringUtils.isEmptyOrWhitespaceOnly(offreHotelDto.getAdresse())){
            errors.add("Adresse c'est un champ obligatoire ");
        }
        if(StringUtils.isEmptyOrWhitespaceOnly(offreHotelDto.getEmail())){
            errors.add("Email c'est un champ obligatoire ");
        }
        if(StringUtils.isEmptyOrWhitespaceOnly(offreHotelDto.getPays())){
            errors.add("Paye c'est un champ obligatoire ");
        }
        if(StringUtils.isEmptyOrWhitespaceOnly(offreHotelDto.getTelephone())){
            errors.add("Telephone c'est un champ obligatoire ");
        }
        if(StringUtils.isEmptyOrWhitespaceOnly(offreHotelDto.getTypeChambre())){
            errors.add("Type Chambre c'est un champ obligatoire ");
        }

        if(offreHotelDto.getDescription() ==""){
            System.out.println(offreHotelDto.getDescription()+"  ###########");

            errors.add("Description c'est un champ obligatoire ");
        }
        if(offreHotelDto.getCapaciteChambre()<1){
            errors.add("capacité doit ètre sup a 0 ");
        }
        if(StringUtils.isEmptyOrWhitespaceOnly(offreHotelDto.getVille())){
            errors.add("Ville c'est un champ obligatoire ");
        }
        if(StringUtils.isEmptyOrWhitespaceOnly(offreHotelDto.getTitre())){
            errors.add("Titre un champ obligatoire ");
        }
        if(0>offreHotelDto.getNombreEtoiles()&& offreHotelDto.getNombreEtoiles()>6){
            errors.add("nombre etoiles min c'est 1 max c'est 5 " +offreHotelDto.getNombreEtoiles());
        }


        if(offreHotelDto.getPrix() <0){
            System.out.println("##### "+offreHotelDto.getPrix()+" #####");
            errors.add("ajouter le Prix ");
        }





        return  errors;
    }
}
