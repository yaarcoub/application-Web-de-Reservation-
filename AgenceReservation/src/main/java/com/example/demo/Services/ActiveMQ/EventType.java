package com.example.demo.Services.ActiveMQ;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.STRING)
public enum EventType {
    CLIENT_ADDED,
    CLIENT_UPDATED,
    CLIENT_DELETED,

    OFFRE_ADDED,
    OFFRE_UPDATED,
    OFFRE_DELETED,

    RESERVATION_ADDED,
    RESERVATION_UPDATED,
    RESERVATION_DELETED,

    IMAGE_ADDED,
    IMAGE_UPDATED,
    IMAGE_DELETED,
    NOTIFICATION_ADD,
    NOTIFICATION_UPDATED,
    NOTIFICATION_DELETED
}
