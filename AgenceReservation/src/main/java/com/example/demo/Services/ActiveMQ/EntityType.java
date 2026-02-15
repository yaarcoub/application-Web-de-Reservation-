package com.example.demo.Services.ActiveMQ;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.STRING)

public enum EntityType {
    OFFRE_VOL,
    OFFRE_HOTEL,
    RESERVATION,
    NOTIFICATION,
    IMAGE
}
