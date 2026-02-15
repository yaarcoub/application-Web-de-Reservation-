package com.example.demo.Services.implementation.chainLogique;

import com.example.demo.Dto.context;

public abstract class HandlerPart1 {
    protected HandlerPart1 next;

    public HandlerPart1 setNext(HandlerPart1 next) {
        this.next = next;
        return next;
    }


    public abstract String handle(context ctx) throws Exception;

}
