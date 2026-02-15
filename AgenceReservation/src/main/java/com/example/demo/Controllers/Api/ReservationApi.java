package com.example.demo.Controllers.Api;

import com.example.demo.Dto.OffreDto;
import com.example.demo.Dto.ReservationOffre;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.demo.Utils.UrlApp.*;


@RestController
public interface ReservationApi {

    @PostMapping(value = CREATE_RESERVATION_PAIEMENT)
    @PreAuthorize("hasAnyRole('CLIENT','ADMIN')")
    public ResponseEntity<?> createPayment(@RequestBody List<ReservationOffre> reservationOffres) throws Exception;


    @GetMapping(value = EXECUTE_RESERVATION_PAIEMENT)
    public ResponseEntity<?> success(@RequestParam("token") String orderId) throws Exception;

    @GetMapping(value = CANCEL_RESERVATION_PAIEMENT)
    public ResponseEntity<?> cancel(@RequestParam("token") String orderId) throws Exception;





}
