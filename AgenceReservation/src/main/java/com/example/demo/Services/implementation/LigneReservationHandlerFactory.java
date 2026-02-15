package com.example.demo.Services.implementation;

import com.example.demo.Services.LigneReservationService;
import com.example.demo.Utils.TypeOffre;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class LigneReservationHandlerFactory {

    private final Map<TypeOffre, LigneReservationService> handlerMap = new HashMap<>();


    public LigneReservationHandlerFactory(List<LigneReservationService> handlers) {
        for (LigneReservationService handler : handlers) {
            handlerMap.put(handler.getSupportedType(), handler);
        }
    }


    @SuppressWarnings("unchecked")

    public LigneReservationService getHandler(TypeOffre typeOffre) {

        LigneReservationService handler = handlerMap.get(typeOffre);

        if (handler == null)
            throw new IllegalArgumentException("No handler found for : " + typeOffre);

        return   handler;
    }


}
