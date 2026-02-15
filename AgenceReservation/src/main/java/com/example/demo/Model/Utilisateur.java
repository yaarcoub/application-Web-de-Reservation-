package com.example.demo.Model;


import com.example.demo.Utils.Role;
import jakarta.persistence.*;
import java.util.List;


@Entity
public class Utilisateur extends AbstractEntity {


    private String name ;

    private String userImage ;
    private String public_id ;

    private String pays ;

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    private  String genre  ;
    private  Integer age ;

    public String getPublic_id() {
        return public_id;
    }

    public void setPublic_id(String public_id) {
        this.public_id = public_id;
    }

    public String getUserImage() {
        return userImage;
    }

    public void setUserImage(String userImage) {
        this.userImage = userImage;
    }

    private String password ;
    @Column(unique = true)
    private String email;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany(mappedBy = "client")
    private List<Notification> notification ;

    @OneToMany(mappedBy = "client")
    private List<Reservation> reservations ;

    @OneToMany(mappedBy = "client")
    private List<Paiement> paiement ;

    @OneToMany(mappedBy = "utilisateur")
    private List<VerificationToken> verificationToken ;

    private Boolean is_enable ;

    public List<VerificationToken> getVerificationToken() {
        return verificationToken;
    }

    public void setVerificationToken(List<VerificationToken> verificationToken) {
        this.verificationToken = verificationToken;
    }

    public Boolean getIs_enable() {
        return is_enable;
    }

    public void setIs_enable(Boolean is_enable) {
        this.is_enable = is_enable;
    }

    public Role getRole() {
        return role;
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


    public void setRole(com.example.demo.Utils.Role role) {
        this.role = role;
    }

    public List<Reservation> getReservations() {
        return reservations;
    }

    public void setReservations(List<Reservation> reservations) {
        this.reservations = reservations;
    }

    public List<Paiement> getPaiement() {
        return paiement;
    }

    public void setPaiement(List<Paiement> paiement) {
        this.paiement = paiement;
    }

    public List<Notification> getNotification() {
        return notification;
    }

    public void setNotification(List<Notification> notification) {
        this.notification = notification;
    }




}
