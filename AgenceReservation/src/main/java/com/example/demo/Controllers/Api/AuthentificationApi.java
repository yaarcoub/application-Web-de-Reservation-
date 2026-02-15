package com.example.demo.Controllers.Api;

import com.example.demo.Dto.EmailBody;
import com.example.demo.Dto.JwtDto;
import com.example.demo.Dto.PasswordReset;
import com.example.demo.Dto.UtilisateurDto;
import jakarta.mail.MessagingException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static com.example.demo.Utils.UrlApp.*;

public interface AuthentificationApi {

    @PostMapping(value = AUTH_REGISTER)
    public UtilisateurDto register(@RequestBody UtilisateurDto user) throws MessagingException;
    @PostMapping(value = AUTH_LOGIN)
    public  JwtDto login(@RequestBody UtilisateurDto user);
    @GetMapping(value = AUTH_VERIFY)
    public  void  EnableAccount(@RequestParam String token);
    @PostMapping(value = REQUEST_PASSWORD_RESET)
    public  void  requestPasswordReset( @RequestBody EmailBody email) throws MessagingException;
    @PostMapping(value = FORGET_PASSWORD_CHANGE)
    public  void  resetPassword( @RequestBody  PasswordReset body) ;

    @PatchMapping(value = UPDATE_USER)
    public UtilisateurDto  Update_User(UtilisateurDto utilisateurDto) ;
}
