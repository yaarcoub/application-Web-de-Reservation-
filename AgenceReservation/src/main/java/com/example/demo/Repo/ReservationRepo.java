package com.example.demo.Repo;

import com.example.demo.Model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReservationRepo extends JpaRepository<Reservation,Integer> {
}
