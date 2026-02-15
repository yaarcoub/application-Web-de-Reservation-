package com.example.demo.handler;

import com.example.demo.exception.EntityNotFoundException;
import com.example.demo.exception.InvalidEntityException;
import com.example.demo.exception.InvalidOperationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@RestControllerAdvice
public class HandlerException extends ResponseEntityExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorClass> handleException(EntityNotFoundException exception, WebRequest webRequest) {

        final HttpStatus notFound = HttpStatus.NOT_FOUND;
        final ErrorClass error = new  ErrorClass() ;
        error.setCode(exception.getErrorCode());
        error.setHttpCode(notFound);
        error.setMessage(exception.getMessage());
        return new ResponseEntity<>(error, notFound);
    }

    @ExceptionHandler(InvalidEntityException.class)
    public ResponseEntity<ErrorClass> handleException(InvalidEntityException exception, WebRequest webRequest) {
        final HttpStatus badRequest = HttpStatus.BAD_REQUEST;

        final ErrorClass errorDto = new ErrorClass();
                errorDto.setCode(exception.getErrorCode()) ;
                errorDto.setHttpCode(badRequest);
                errorDto.setMessage(exception.getMessage());
                errorDto.setErrors(exception.getErrors());


        return new ResponseEntity<>(errorDto, badRequest);
    }
    @ExceptionHandler(InvalidOperationException.class)
    public ResponseEntity<ErrorClass> handleException(InvalidOperationException exception, WebRequest webRequest) {
        final HttpStatus badRequest = HttpStatus.BAD_REQUEST;

        final ErrorClass errorDto = new ErrorClass();
        errorDto.setCode(exception.getErrorCode()) ;
        errorDto.setHttpCode(badRequest);
        errorDto.setMessage(exception.getMessage());
        errorDto.setErrors(exception.getErrors());


        return new ResponseEntity<>(errorDto, badRequest);
    }





}
