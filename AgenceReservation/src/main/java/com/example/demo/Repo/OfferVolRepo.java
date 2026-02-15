package com.example.demo.Repo;

import com.example.demo.Model.OffreVol;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OfferVolRepo extends JpaRepository<OffreVol,Integer> {

    List<OffreVol> findByADDAndADA(String ADD, String ADA);

}
