package com.example.demo.Dto;

public class Client {
    private String nom ;
    private String prenom;
    private  int age ;

    private  String cinOrPassport;


    private String genre ;
    private String pays ;


    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getCinOrPassport() {
        return cinOrPassport;
    }

    public void setCinOrPassport(String cinOrPassport) {
        this.cinOrPassport = cinOrPassport;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }



    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }


}
