package com.example.demo.Services.PaypalService;

import com.example.demo.Configuration.PayPalConfig;
import com.example.demo.Repo.OffreRepo;
import com.example.demo.Repo.UtilisateurRepo;
import com.example.demo.Services.implementation.CreateReservation;
import com.example.demo.Services.implementation.PaiementServiceImp;
import com.example.demo.Services.implementation.chainLogique.Handler;
import com.example.demo.exception.ErrorCode;
import com.example.demo.exception.InvalidOperationException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class executePypalPaiement extends Handler {
    @Autowired
    private UtilisateurRepo utilisateurRepo ;

    @Autowired
    private PayPalConfig config;




    @Autowired
    private PaiementServiceImp paiementServiceImp ;

    @Value("${paypal.base-url}")
    private String baseUrl;

 /*   public String createPayment(List<OffreDto> offreDtoList) throws Exception {
        String currency = "USD";
        String returnUrl = RETURN_URL;
        String cancelUrl = CANCEL_URL;
        double total = 0;

        if (offreDtoList == null || offreDtoList.isEmpty()) {
            throw new InvalidOperationException("Vous devez sélectionner les offres d'abord", ErrorCode.INVALID_OPERATION);
        }

        List<OffreDto> offres = new ArrayList<>();
        for (OffreDto offreDto : offreDtoList) {
            Offre offre = offreRepo.findById(offreDto.getId())
                    .orElseThrow(() -> new EntityNotFoundException(
                            "On ne trouve pas l'offre avec id=" + offreDto.getId(),
                            ErrorCode.OFFER_NOT_FOUND));
            offres.add(OffreDto.fromEntity(offre));
            total += offre.getPrix() * (100 - offre.getPromotion()) / 100;
        }

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Utilisateur client = utilisateurRepo.findUtilisateurByEmail(email);

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


        TemporaryPayment temporaryPayment = new TemporaryPayment();

        String jsonOffres = mapper.writeValueAsString(offres);
        temporaryPayment.setOffreListJson(jsonOffres);

        temporaryPayment.setPaiementID(json.get("id").asText());
        temporaryPayment.setUtilisateur(client);
        temporaryPayment.setPrixTotal(total);
        temporaryPayementRepo.save(temporaryPayment);

        return json.get("links").get(1).get("href").asText(); // approval URL
    } */







    public JsonNode capturePayment(String orderId) throws Exception {

        String accessToken = config.generateAccessToken();

        URL url = new URL(baseUrl + "/v2/checkout/orders/" + orderId + "/capture");
        HttpURLConnection connection = (HttpURLConnection) url.openConnection();

        connection.setRequestMethod("POST");
        connection.setRequestProperty("Authorization", "Bearer " + accessToken);
        connection.setRequestProperty("Content-Type", "application/json");
        connection.setDoOutput(true);

        String response = new String(connection.getInputStream().readAllBytes());

        ObjectMapper mapper = new ObjectMapper();
        return mapper.readTree(response);
    }


    @Override
    public byte[] handle(String PaiementId) throws Exception {
        JsonNode capture = capturePayment(PaiementId) ;
        if(capture.get("status").asText().equals("COMPLETED")){
            paiementServiceImp.confirmPaiement(PaiementId);
            return next.handle(PaiementId);
        }
        throw new InvalidOperationException("No valide Paiement ", ErrorCode.NOT_VALID_PAIEMENT);
    }


}
