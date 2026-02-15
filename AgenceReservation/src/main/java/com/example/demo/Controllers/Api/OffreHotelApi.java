package com.example.demo.Controllers.Api;

import com.example.demo.Dto.OffreDto;
import com.example.demo.Dto.OffreHotelDto;
import com.example.demo.Dto.OffreVolDto;
import com.example.demo.Model.OffreHotel;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.demo.Utils.UrlApp.*;

public interface OffreHotelApi {


    @PostMapping(value = CREATE_OFFRE_HOTEL)
    @PreAuthorize("hasRole('ADMIN')")
    public OffreDto save(@RequestBody OffreHotelDto offreHotelDto) throws JsonProcessingException;



    @DeleteMapping(value = DELETE_OFFRE_HOTEL)
    @PreAuthorize("hasRole('ADMIN')")
    public  void deleteOffreHotel(@RequestParam Integer id) throws JsonProcessingException;

    @PatchMapping(value = UPDATE_OFFRE_HOTEL)
    @PreAuthorize("hasRole('ADMIN')")
    public  void  updateOffreHotel(@RequestBody OffreHotelDto offreHotelDto) throws JsonProcessingException;
}
