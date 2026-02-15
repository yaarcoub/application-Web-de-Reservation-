package com.example.demo.Dto;

import com.example.demo.Utils.TypeOffre;

import java.util.List;

public class ImageDto {

    private   int Id ;

    private   int IdOffre ;
    private   String Url ;

    private TypeOffre typeOffre ;

    public TypeOffre getTypeOffre() {
        return typeOffre;
    }

    public void setTypeOffre(TypeOffre typeOffre) {
        this.typeOffre = typeOffre;
    }

    public int getIdOffre() {
        return IdOffre;
    }

    public void setIdOffre(int idOffre) {
        IdOffre = idOffre;
    }

    public String getUrl() {
        return Url;
    }

    public void setUrl(String url) {
        Url = url;
    }


    public int getId() {
        return Id;
    }

    public void setId(int id) {
        Id = id;
    }




}
