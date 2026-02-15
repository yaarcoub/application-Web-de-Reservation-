package com.example.demo.Services;

import com.example.demo.Dto.OffreHotelDto;
import com.example.demo.Model.Offre;
import com.example.demo.Utils.TypeOffre;
import com.fasterxml.jackson.core.JsonProcessingException;

public interface OffreServices<T> {


    public T save(T offreHotelDto) throws JsonProcessingException;

    public void DeleteOffre(Integer id) throws JsonProcessingException;

    public  T updateOffre(T offreHotelDto) throws JsonProcessingException;

    public TypeOffre getSupportType();
    public void  updateAfterReservation(int id);




}
