package com.example.demo.Services.PaypalService;

import com.example.demo.Configuration.PayPalConfig;
import com.example.demo.Dto.context;
import com.example.demo.Repo.OffreRepo;
import com.example.demo.Repo.UtilisateurRepo;
import com.example.demo.Services.implementation.CreateReservation;
import com.example.demo.Services.implementation.PaiementServiceImp;
import com.example.demo.Services.implementation.chainLogique.HandlerPart1;
import com.example.demo.exception.ErrorCode;
import com.example.demo.exception.InvalidOperationException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import static com.example.demo.Utils.UrlApp.CANCEL_URL;
import static com.example.demo.Utils.UrlApp.RETURN_URL;

@Service
public class CreatePaypalPaiement extends HandlerPart1 {
    @Autowired
    private UtilisateurRepo utilisateurRepo ;

    @Autowired
    private PayPalConfig config;


    @Autowired
    private  CreatePaiementClasse createPaiementClasse ;
    @Autowired
    private OffreRepo offreRepo ;

    @Autowired
    private CreateReservation createReservation ;


    @Autowired
    private PaiementServiceImp paiementServiceImp ;

    @Value("${paypal.base-url}")
    private String baseUrl;



    public void createPayment(context ctx) throws Exception  {
        String currency = "USD";
        String returnUrl = RETURN_URL;
        String cancelUrl = CANCEL_URL;
        double total = 0;


        if (ctx.getReservationOffre() == null || ctx.getReservationOffre().isEmpty()) {
            throw new InvalidOperationException("Vous devez sélectionner les offres d'abord", ErrorCode.INVALID_OPERATION);
        }

        total = createPaiementClasse.createPaiementTemporaire(ctx.getReservationOffre());



        String accessToken = config.generateAccessToken();
        URL url = new URL(baseUrl + "/v2/checkout/orders");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        connection.setRequestMethod("POST");
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setRequestProperty("Authorization", "Bearer " + accessToken);
        connection.setDoOutput(true);

        String formattedTotal = String.format("%.2f", total);

        String requestBody =  """
{
  "intent": "CAPTURE",
  "purchase_units": [{
    "amount": {
      "currency_code": "%s",
      "value": "%s"
    }
  }],
  "application_context": {
    "return_url": "%s",
    "cancel_url": "%s"
  }
}
""".formatted(currency, formattedTotal, returnUrl, cancelUrl);


        try (OutputStream os = connection.getOutputStream()) {
            os.write(requestBody.getBytes());
        }



        // Sauvegarde la réponse PayPal
        String response = new String(connection.getInputStream().readAllBytes());
        ObjectMapper mapper = new ObjectMapper();
        JsonNode json = mapper.readTree(response);


         ctx.setPrixTotal(total);
         ctx.setPaiementId(json.get("id").asText());
         ctx.setUrL(json.get("links").get(1).get("href").asText());

    }


    @Override
    public String handle(context ctx) throws Exception {
        createPayment(ctx);
        return   next.handle(ctx);

    }
}
