package com.example.demo.Repo;

import com.example.demo.Model.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationTokenRepo extends JpaRepository<VerificationToken,Long> {
    VerificationToken findByToken(String token);

}
