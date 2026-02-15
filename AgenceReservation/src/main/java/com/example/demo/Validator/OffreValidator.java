package com.example.demo.Validator;

import com.example.demo.Dto.OffreDto;
import com.mysql.cj.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class OffreValidator {


    public  static  List<String> validator(OffreDto offreDto){
        List<String> errors = new ArrayList<>() ;

        if(offreDto == null){
            errors.add(" l'object doit pas etre null") ;

        }



        if(StringUtils.isEmptyOrWhitespaceOnly(offreDto.getDescription())){
         errors.add("Description c'est un champ obligatoir") ;
        }

        if(StringUtils.isEmptyOrWhitespaceOnly(offreDto.getTitre())){
            errors.add("Titre c'est un champ obligatoir") ;
        }
        if(StringUtils.isEmptyOrWhitespaceOnly(offreDto.getDDS().toString())){
            errors.add("Date de susponsion c'est un champ obligatoir") ;
        }

        return  errors ;
    }

 }
