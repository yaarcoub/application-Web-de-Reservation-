package com.example.demo.Repo;

import com.example.demo.Model.OffreHotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OffreHotelRepo extends JpaRepository<OffreHotel,Integer> {


 public List<OffreHotel> findByville(String ville);


}
