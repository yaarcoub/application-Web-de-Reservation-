package com.example.demo.Controllers;

import com.example.demo.Controllers.Api.OffreVolApi;
import com.example.demo.Dto.OffreDto;
import com.example.demo.Dto.OffreVolDto;
import com.example.demo.Services.implementation.OffreVolServicesImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;


@RestController
public class OffreVolController implements OffreVolApi {

    @Autowired
    private OffreVolServicesImpl offreVolServices ;

    @Override
    public OffreDto save(OffreVolDto offreVolDto) throws JsonProcessingException {
        return offreVolServices.save(offreVolDto);
    }

    @Override
    public void UpdateOffre(OffreVolDto offreVolDto) throws JsonProcessingException {
        offreVolServices.updateOffre(offreVolDto);
    }



    @Override
    public void DeleteOffreVole(Integer id) throws JsonProcessingException {
        offreVolServices.DeleteOffre(id);
    }
}
