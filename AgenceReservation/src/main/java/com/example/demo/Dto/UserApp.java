package com.example.demo.Dto;

import com.example.demo.Model.Utilisateur;

public class UserApp {

     private int id ;
    private String pays ;

    private String email ;
    private  String genre  ;
    private  int age ;

    private String name ;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPays() {
        return pays;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public static UserApp fromEntity(Utilisateur utilisateur) {

        UserApp userApp = new UserApp();
        userApp.setId(utilisateur.getId());
        userApp.setPays(utilisateur.getPays());
        userApp.setEmail(utilisateur.getEmail());
        userApp.setGenre(utilisateur.getGenre());
        if(utilisateur.getAge() != null)        userApp.setAge(utilisateur.getAge());

        userApp.setName(utilisateur.getName());

        return userApp;

    }

}
