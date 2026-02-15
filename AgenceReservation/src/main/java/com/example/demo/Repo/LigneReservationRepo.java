package com.example.demo.Repo;

import com.example.demo.Model.LigneReservation;
import com.example.demo.Model.Reservation;
import com.example.demo.Utils.StatusReservation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.Instant;
import java.util.List;

public interface LigneReservationRepo extends JpaRepository<LigneReservation,Integer> {
   public void deleteByReservation(Reservation reservation);
   public List<LigneReservation> findByReservation(Reservation reservation);

   List<LigneReservation> findByStatusAndCreationDateBefore(
           StatusReservation status,
           Instant date
   );

   public  LigneReservation findByCodeReservation(String codeReservation) ;

}
