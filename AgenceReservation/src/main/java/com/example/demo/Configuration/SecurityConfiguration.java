package com.example.demo.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.authentication.configurers.userdetails.DaoAuthenticationConfigurer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static com.example.demo.Utils.UrlApp.*;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfiguration {

    @Autowired
    private UserDetailsService userDetailsService;
    @Autowired
    private  JwtFilter jwtFilter ;
   @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
       http.csrf(customizer -> customizer.disable());
       http.authorizeHttpRequests(request -> request.requestMatchers(AUTH_LOGIN,AUTH_REGISTER,AUTH_VERIFY,EXECUTE_RESERVATION_PAIEMENT
                       ,REQUEST_PASSWORD_RESET, FORGET_PASSWORD_CHANGE)
               .permitAll().anyRequest().authenticated());
       http.httpBasic(Customizer.withDefaults());
       http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
       http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
        http.cors(Customizer.withDefaults());
       return  http.build() ;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
       return  configuration.getAuthenticationManager();
    }


    @Bean
    public AuthenticationProvider authenticationProvider(){
        DaoAuthenticationProvider prvider = new DaoAuthenticationProvider();
        prvider.setPasswordEncoder(new BCryptPasswordEncoder(10));
        prvider.setUserDetailsService(userDetailsService);
        return  prvider ;

    }
}
