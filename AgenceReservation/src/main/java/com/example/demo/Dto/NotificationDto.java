package com.example.demo.Dto;

import com.example.demo.Model.Notification;
import com.example.demo.Model.Reservation;
import com.example.demo.Model.Utilisateur;
import com.example.demo.Utils.NotificationType;

public class NotificationDto {
    private  int id ;

    private boolean lu ;

    private String Description;

    private Integer ClientId ;

    private  String message ;

    private NotificationType notificationType ;

    private String reference ;



    public  static NotificationDto fromEntity(Notification notification){
        NotificationDto notificationDto = new NotificationDto();

        notificationDto.setClient(notification.getClient().getId());
        notificationDto.setDescription(notification.getDescription());
        notificationDto.setLu(notification.isLu());
        notificationDto.setId(notification.getId());
        notificationDto.setReference(notification.getReference());
        notificationDto.setMessage(notification.getMessage());
        notificationDto.setNotificationType(notification.getNotificationType());

        return  notificationDto ;
    }





    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public NotificationType getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(NotificationType notificationType) {
        this.notificationType = notificationType;
    }

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public boolean isLu() {
        return lu;
    }

    public void setLu(boolean lu) {
        this.lu = lu;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public Integer getClient() {
        return ClientId;
    }

    public void setClient(Integer client) {
        this.ClientId = client;
    }


}
