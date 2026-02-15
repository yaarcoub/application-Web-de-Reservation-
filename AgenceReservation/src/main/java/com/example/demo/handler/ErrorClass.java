package com.example.demo.handler;

import com.example.demo.exception.ErrorCode;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;


public class ErrorClass {

    private HttpStatus httpCode;

    private ErrorCode code;

    private String message;

    private List<String> errors = new ArrayList<>();

    public HttpStatus getHttpCode() {
        return httpCode;
    }

    public void setHttpCode(HttpStatus httpCode) {
        this.httpCode = httpCode;
    }

    public ErrorCode getCode() {
        return code;
    }

    public void setCode(ErrorCode code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }
}

