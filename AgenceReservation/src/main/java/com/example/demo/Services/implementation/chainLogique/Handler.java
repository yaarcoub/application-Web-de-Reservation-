package com.example.demo.Services.implementation.chainLogique;

import com.example.demo.Dto.context;

public abstract class Handler {
    protected Handler next;

    private  byte[] pdf ;

    public Handler getNext() {
        return next;
    }

    public byte[] getPdf() {
        return pdf;
    }

    public void setPdf(byte[] pdf) {
        this.pdf = pdf;
    }

    public Handler setNext(Handler next) {
        this.next = next;
        return next;
    }


    public abstract byte[] handle(String PaiementId) throws Exception;


}
