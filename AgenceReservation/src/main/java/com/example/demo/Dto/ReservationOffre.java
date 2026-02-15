package com.example.demo.Dto;

import com.example.demo.Model.Offre;
import com.example.demo.Utils.TypeOffre;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;


@JsonTypeInfo(
        use = JsonTypeInfo.Id.NAME,
        include = JsonTypeInfo.As.PROPERTY,
        property = "typeOffre",
        visible = true
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = ReservationOffreHotel.class, name = "HOTEL"),
        @JsonSubTypes.Type(value = ReservationOffreVol.class, name = "VOL")
})
public abstract class ReservationOffre {

    private  int id  ;
    private  double prix ;

    private TypeOffre typeOffre ;

    public TypeOffre getTypeOffre() {
        return typeOffre;
    }

    public void setTypeOffre(TypeOffre typeOffre) {
        this.typeOffre = typeOffre;
    }

    public double getPrix() {

        return prix;
    }

    public void setPrix(double prix) {
        this.prix = prix;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public abstract double calculerPrix(Offre offre) ;
}
