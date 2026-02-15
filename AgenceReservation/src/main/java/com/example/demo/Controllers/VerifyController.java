package com.example.demo.Controllers;

import com.example.demo.Model.LigneReservation;
import com.example.demo.Services.implementation.ValidationReservation;
import com.example.demo.Utils.StatusReservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/agence-de-Reservation/v1/reservation")
public class VerifyController {

    @Autowired
    private ValidationReservation validationReservation;

    @GetMapping("/verify")
    @PreAuthorize("hasRole('ADMIN')")
    public String verify(@RequestParam("token") String idReservation, Model model) {

        LigneReservation ligneReservation = validationReservation.valider(idReservation);

        model.addAttribute("reservation", ligneReservation);

        if (ligneReservation.getStatus() == StatusReservation.CONFIRME) {
            return "reservation-valide"; // Thymeleaf page
        } else {
            return "reservation-expiree"; // Thymeleaf page
        }
    }
}
