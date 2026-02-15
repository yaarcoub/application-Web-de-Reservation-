package com.example.demo.Configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Base64;

@Service
public class PayPalConfig {

    @Value("${paypal.client-id}")
    private String clientId;

    @Value("${paypal.client-secret}")
    private String clientSecret;

    @Value("${paypal.base-url}")
    private String baseUrl;

    public PayPalConfig() {
    }



    public String generateAccessToken() throws Exception {
        String auth = clientId + ":" + clientSecret;
        String encodedAuth = Base64.getEncoder().encodeToString(auth.getBytes());

        URL url = new URL(baseUrl + "/v1/oauth2/token");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
        connection.setRequestMethod("POST");
        connection.setRequestProperty("Authorization", "Basic " + encodedAuth);
        connection.setDoOutput(true);

        OutputStream os = connection.getOutputStream();
        os.write("grant_type=client_credentials".getBytes());
        os.flush();
        os.close();

        String response = new String(connection.getInputStream().readAllBytes());

        ObjectMapper mapper = new ObjectMapper();
        return mapper.readTree(response).get("access_token").asText();
    }
}
