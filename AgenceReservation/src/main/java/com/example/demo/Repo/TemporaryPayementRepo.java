package com.example.demo.Repo;

import com.example.demo.Model.TemporaryPayment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TemporaryPayementRepo extends JpaRepository<TemporaryPayment,Integer> {

 public    TemporaryPayment findByPaiementID(String paiementID);
 public void deleteByPaiementID(String paiementID);
}
