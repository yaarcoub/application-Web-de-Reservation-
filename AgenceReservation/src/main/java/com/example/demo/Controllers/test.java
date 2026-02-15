package com.example.demo.Controllers;

import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class test {

    @GetMapping("/")

   public String fonction(HttpServletRequest httpServletRequest) {
        return "Hello" + " "+ httpServletRequest.getSession().getId();
    }
}
