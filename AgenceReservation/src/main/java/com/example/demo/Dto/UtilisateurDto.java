package com.example.demo.Dto;

import com.example.demo.Model.Paiement;
import com.example.demo.Model.Utilisateur;
import com.example.demo.Utils.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

public class UtilisateurDto {

    private Integer id;
    private String name;
    private String password;
    private String email;

    // 🔹 Nouveaux attributs
    private String genre;
    private String pays;
    private int age;

    private Role role;

    @JsonIgnore
    private List<NotificationDto> notificationDtos;

    @JsonIgnore
    private List<ReservationDto> reservationDtos;

    @JsonIgnore
    private List<Paiement> paiement;

    // ===== Getters & Setters =====

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
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

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public List<Paiement> getPaiement() {
        return paiement;
    }

    public void setPaiement(List<Paiement> paiement) {
        this.paiement = paiement;
    }

    // ===== Mapping =====

    public static UtilisateurDto fromEntity(Utilisateur utilisateur) {
        UtilisateurDto dto = new UtilisateurDto();
        dto.setId(utilisateur.getId());
        dto.setName(utilisateur.getName());
        dto.setEmail(utilisateur.getEmail());
        dto.setPassword(utilisateur.getPassword());
        dto.setRole(utilisateur.getRole());

        // 🔹 Nouveaux champs
        if(utilisateur.getGenre() !=""){dto.setGenre(utilisateur.getGenre());}
        if(utilisateur.getPays() !="") { dto.setPays(utilisateur.getPays()); }
        if(utilisateur.getAge()!= null){ dto.setAge(utilisateur.getAge());}


            return dto;
    }

    public static Utilisateur toEntity(UtilisateurDto dto) {
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setId(dto.getId());
        utilisateur.setName(dto.getName());
        utilisateur.setEmail(dto.getEmail());
        utilisateur.setPassword(dto.getPassword());
        utilisateur.setRole(dto.getRole());

        // 🔹 Nouveaux champs
        utilisateur.setGenre(dto.getGenre());
        utilisateur.setPays(dto.getPays());
        utilisateur.setAge(dto.getAge());

        return utilisateur;
    }
}
