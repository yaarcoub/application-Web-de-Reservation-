package com.example.demo.Model;

import jakarta.persistence.*;

@Entity
public class ImageOffre {

    @Id
    @GeneratedValue
    private Integer id;
    private  String Url ;

   private String public_id ;

    public String getPublic_id() {
        return public_id;
    }

    public void setPublic_id(String public_id) {
        this.public_id = public_id;
    }

    @ManyToOne
    @JoinColumn(name = "idOffre")
    private  Offre offre ;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUrl() {
        return Url;
    }

    public void setUrl(String url) {
        Url = url;
    }

    public Offre getOffre() {
        return offre;
    }

    public void setOffre(Offre offre) {
        this.offre = offre;
    }
}
