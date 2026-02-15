package com.example.demo.exception;

public enum ErrorCode {

    OFFER_NOT_FOUND(1000),
    OFFER_NOT_VALID(1001),
    OFFER_ALREADY_IN_USE(1002),

    RESERVATION_NOT_FOUND(2000),
    RESERVATION_NOT_VALID(2001),

    USER_NOT_FOUND(3000),
    USER_NOT_VALID(3001),
    USER_ALREADY_EXIST(3002),

    LIGN_RESERVATION_NOT_FOUND(4000),
    LIGN_RESERVATION_NOT_VALID(4001),
    NOT_VALID_INFO(5000),
    INVALID_OPERATION(50001),
    NOT_FOUND_TOKEN(50002),

    NOT_VALID_PAIEMENT(60000),



    IMAGE_NOT_FOUND(70000);

    private int code;

    ErrorCode(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }
}
