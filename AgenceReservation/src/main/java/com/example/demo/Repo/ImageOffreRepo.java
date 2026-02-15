package com.example.demo.Repo;

import com.example.demo.Model.ImageOffre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImageOffreRepo extends JpaRepository<ImageOffre,Integer> {
   void deleteByOffre_Id(Integer idOffre);

}
