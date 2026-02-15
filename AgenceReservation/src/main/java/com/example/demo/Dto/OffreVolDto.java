package com.example.demo.Dto;

import com.example.demo.Model.OffreVol;
import com.example.demo.Utils.TypeOffre;

import java.time.LocalDateTime;
import java.util.Date;

public class OffreVolDto extends OffreDto {

    private String compagnie;
    private String ADD;       // Aéroport de départ
    private String ADA;       // Aéroport d'arrivée
    private LocalDateTime DDA;         // Date d'arrivée
    private LocalDateTime DDD;         // Date de départ



    private String numeroVol;
    private String typeAvion;
    private double dureeVol;
    private String classe;
    private int nombrePlacesDisponibles;
    private String paysDepart;
    private String paysArrivee;

    // ----- Getters & Setters -----

    public String getCompagnie() { return compagnie; }
    public void setCompagnie(String compagnie) { this.compagnie = compagnie; }

    public String getADD() { return ADD; }
    public void setADD(String ADD) { this.ADD = ADD; }

    public String getADA() { return ADA; }
    public void setADA(String ADA) { this.ADA = ADA; }

    public LocalDateTime getDDA() { return DDA; }
    public void setDDA(LocalDateTime DDA) { this.DDA = DDA; }

    public LocalDateTime getDDD() { return DDD; }
    public void setDDD(LocalDateTime DDD) { this.DDD = DDD; }

    public String getNumeroVol() { return numeroVol; }
    public void setNumeroVol(String numeroVol) { this.numeroVol = numeroVol; }

    public String getTypeAvion() { return typeAvion; }
    public void setTypeAvion(String typeAvion) { this.typeAvion = typeAvion; }

    public double getDureeVol() { return dureeVol; }
    public void setDureeVol(double dureeVol) { this.dureeVol = dureeVol; }

    public String getClasse() { return classe; }
    public void setClasse(String classe) { this.classe = classe; }

    public int getNombrePlacesDisponibles() { return nombrePlacesDisponibles; }
    public void setNombrePlacesDisponibles(int nombrePlacesDisponibles) { this.nombrePlacesDisponibles = nombrePlacesDisponibles; }

    public String getPaysDepart() { return paysDepart; }
    public void setPaysDepart(String paysDepart) { this.paysDepart = paysDepart; }

    public String getPaysArrivee() { return paysArrivee; }
    public void setPaysArrivee(String paysArrivee) { this.paysArrivee = paysArrivee; }

    // ----- Mappers -----

    public static OffreVolDto fromEntity(OffreVol offreVol) {
        OffreVolDto dto = new OffreVolDto();

        dto.setId(offreVol.getId());
        dto.setTitre(offreVol.getTitre());
        dto.setDescription(offreVol.getDescription());
        dto.setPromotion(offreVol.getPromotion());
        dto.setPrix(offreVol.getPrix());

        dto.setADD(offreVol.getADD());
        dto.setADA(offreVol.getADA());
        dto.setDDD(offreVol.getDDD());
        dto.setDDA(offreVol.getDDA());
        dto.setDDS(offreVol.getDDS());

        dto.setCompagnie(offreVol.getCompagnie());
        dto.setNumeroVol(offreVol.getNumeroVol());
        dto.setTypeAvion(offreVol.getTypeAvion());
        dto.setDureeVol(offreVol.getDureeVol());
        dto.setClasse(offreVol.getClasse());
        dto.setNombrePlacesDisponibles(offreVol.getNombrePlacesDisponibles());

        dto.setPaysDepart(offreVol.getPaysDepart());
        dto.setPaysArrivee(offreVol.getPaysArrivee());
        dto.setTypeOffre(TypeOffre.VOL);
        return dto;
    }

    public static OffreVol toEntity(OffreVolDto dto) {
        OffreVol entity = new OffreVol();

        entity.setId(dto.getId());
        entity.setTitre(dto.getTitre());
        entity.setDescription(dto.getDescription());
        entity.setPromotion(dto.getPromotion());
        entity.setTypeOffre(dto.getTypeOffre());
        entity.setPrix(dto.getPrix());

        entity.setADD(dto.getADD());
        entity.setADA(dto.getADA());
        entity.setDDD(dto.getDDD());
        entity.setDDA(dto.getDDA());
        entity.setDDS(dto.getDDS());

        entity.setCompagnie(dto.getCompagnie());
        entity.setNumeroVol(dto.getNumeroVol());
        entity.setTypeAvion(dto.getTypeAvion());
        entity.setDureeVol(dto.getDureeVol());
        entity.setClasse(dto.getClasse());
        entity.setNombrePlacesDisponibles(dto.getNombrePlacesDisponibles());

        entity.setPaysDepart(dto.getPaysDepart());
        entity.setPaysArrivee(dto.getPaysArrivee());
        entity.setTypeOffre(TypeOffre.VOL);

        return entity;
    }
}
