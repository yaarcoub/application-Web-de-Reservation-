package com.example.demo.exception;

import java.util.List;

public class InvalidOperationException extends RuntimeException {

    private ErrorCode errorCode;

    private List<String> errors;

    public ErrorCode getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public InvalidOperationException(String message) {
        super(message);
    }

    public InvalidOperationException(String message, Throwable cause) {
        super(message, cause);
    }

    public InvalidOperationException(String message, Throwable cause, ErrorCode errorCode) {
        super(message, cause);
        this.errorCode = errorCode;
    }

    public InvalidOperationException(String message, ErrorCode errorCode) {
        super(message);
        this.errorCode = errorCode;
    }

    public InvalidOperationException(String message, ErrorCode errorCode, List<String> errors) {
        super(message);
        this.errorCode = errorCode;
        this.errors = errors;
    }



}
