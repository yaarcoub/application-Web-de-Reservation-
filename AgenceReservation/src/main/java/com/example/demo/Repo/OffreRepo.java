package com.example.demo.Repo;

import com.example.demo.Model.Offre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OffreRepo extends JpaRepository<Offre,Integer> {
}
