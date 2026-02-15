package com.example.demo.Services.ActiveMQ;


import java.io.Serializable;

public class DomainEvent<T>  implements Serializable {


    private EventType type;
    private EntityType entity;
    private T data;

    public EntityType getEntity() {
        return entity;
    }

    public void setEntity(EntityType entity) {
        this.entity = entity;
    }

    public DomainEvent(EventType type, EntityType entity, T data) {
        this.type = type;
        this.entity = entity;
        this.data = data;
    }

    public EventType getType() { return type; }
    public void setType(EventType type) { this.type = type; }


    public T getData() { return data; }
    public void setData(T data) { this.data = data; }
}
