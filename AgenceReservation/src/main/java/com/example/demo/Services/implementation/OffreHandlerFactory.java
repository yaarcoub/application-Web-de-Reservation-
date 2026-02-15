package com.example.demo.Services.implementation;

import com.example.demo.Model.OffreHotel;
import com.example.demo.Services.LigneReservationService;
import com.example.demo.Services.OffreServices;
import com.example.demo.Utils.TypeOffre;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class OffreHandlerFactory {
    private final Map<TypeOffre, OffreServices> handlerMap = new HashMap<>();


    public OffreHandlerFactory(List<OffreServices> handlers) {
        for (OffreServices handler : handlers) {
            handlerMap.put(handler.getSupportType(), handler);
        }
    }


    @SuppressWarnings("unchecked")
    public OffreServices getHandler(TypeOffre typeOffre) {

        OffreServices handler = handlerMap.get(typeOffre);

        if (handler == null)
            throw new IllegalArgumentException("No handler found for : " + typeOffre);

        return   handler;
    }
}
