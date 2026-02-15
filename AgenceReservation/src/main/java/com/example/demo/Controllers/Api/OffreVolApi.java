package com.example.demo.Controllers.Api;

import com.example.demo.Dto.OffreDto;
import com.example.demo.Dto.OffreVolDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.example.demo.Utils.UrlApp.*;

public interface OffreVolApi {
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = CREATE_OFFRE_VOL)
    public OffreDto save(@RequestBody OffreVolDto offreVolDto) throws JsonProcessingException;


    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping(value = DELETE_OFFRE_VOL)
    public void DeleteOffreVole(@RequestParam Integer id) throws JsonProcessingException;

    @PreAuthorize("hasRole('ADMIN')")
    @PatchMapping(value = UPDATE_OFFRE_VOL)
    public  void  UpdateOffre(@RequestBody OffreVolDto offreVolDto) throws JsonProcessingException;


}
