package com.example.demo.Controllers;

import com.example.demo.Controllers.Api.OffreHotelApi;
import com.example.demo.Dto.OffreDto;
import com.example.demo.Dto.OffreHotelDto;
import com.example.demo.Services.OffreServices;
import com.example.demo.Services.implementation.OffreHotelServicesImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class OffreHotelController implements OffreHotelApi {

    @Autowired
    private OffreHotelServicesImpl offreHotelServices ;


    @Override
    public OffreDto save(OffreHotelDto offreHotelDto) throws JsonProcessingException {
        return offreHotelServices.save(offreHotelDto);
    }


    @Override
    public void deleteOffreHotel(Integer id) throws JsonProcessingException {
        offreHotelServices.DeleteOffre(id);
    }

    @Override
    public void updateOffreHotel(OffreHotelDto offreHotelDto) throws JsonProcessingException {

        offreHotelServices.updateOffre(offreHotelDto);

    }
}
