package com.example.demo.Repo;

import com.example.demo.Model.LigneReservation;
import com.example.demo.Model.Reservation;
import com.example.demo.Model.ReservationHotel;
import com.example.demo.Model.ReservationVol;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationVolRepo extends JpaRepository<ReservationVol,Integer> {
    public List<ReservationVol> findByReservation(Reservation reservation);

}
