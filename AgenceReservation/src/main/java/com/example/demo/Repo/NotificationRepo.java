package com.example.demo.Repo;

import com.example.demo.Model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepo extends JpaRepository<Notification,Integer> {


    List<Notification> findByClient_IdAndLuFalse(int idClient);



}
