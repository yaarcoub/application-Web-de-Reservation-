package com.example.demo.Services.EmailService;

import com.example.demo.Dto.UtilisateurDto;
import com.example.demo.Model.Utilisateur;
import com.example.demo.Utils.UrlApp;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import java.time.Year;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Autowired
    private TemplateEngine templateEngine;

    public void sendVerificationEmail(Utilisateur utilisateur, String code) throws MessagingException {

        // 1. Préparer le template Thymeleaf
        Context ctx = new Context();
        ctx.setVariable("name", utilisateur.getName());
        ctx.setVariable("code", code);
        ctx.setVariable("verificationLink", UrlApp.AUTH_EMAIL_VERIFY + "?token=" + code);
        ctx.setVariable("companyName", "en ligne Booking");
        ctx.setVariable("supportEmail", "yaakoubbourzak@gmail.com");
        ctx.setVariable("year", Year.now().getValue());
        ctx.setVariable("companyAddress", "CasaBlanca,Maroc");

        String htmlContent = templateEngine.process("emailVerification", ctx);

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);

        helper.setTo(utilisateur.getEmail());
        helper.setSubject("Vérification de votre Email");
        helper.setText(htmlContent, true);

        mailSender.send(message);
    }


    public void sendNotificationEmail(String url, double prixTotal, Utilisateur client)
            throws MessagingException {

        Context ctx = new Context();
        ctx.setVariable("name", client.getName());
        ctx.setVariable("paymentUrl", url);
        ctx.setVariable("totalPrice", prixTotal);
        ctx.setVariable("companyName", "En Ligne Booking");
        ctx.setVariable("year", Year.now().getValue());
        ctx.setVariable("companyAddress", "Casablanca, Maroc");

        String htmlContent = templateEngine.process("emailNotification1", ctx);

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(client.getEmail());
        helper.setSubject("⏳ Paiement requis pour confirmer votre réservation");
        helper.setText(htmlContent, true);

        mailSender.send(message);
    }

    public void sendPaymentSuccessEmailWithPdf(
            Utilisateur client,
            byte[] pdfBytes
    ) throws MessagingException {

        // 1️⃣ Préparer le contenu HTML de l’email
        Context ctx = new Context();
        ctx.setVariable("name", client.getName());
        ctx.setVariable("companyName", "En Ligne Booking");
        ctx.setVariable("year", Year.now().getValue());
        ctx.setVariable("companyAddress", "Casablanca, Maroc");

        String htmlContent = templateEngine.process("NotificationConfirmation", ctx);

        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper =
                new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(client.getEmail());
        helper.setSubject("✅ Paiement confirmé — Réservation validée");
        helper.setText(htmlContent, true);

        // 3️⃣ Ajouter le PDF en pièce jointe
        helper.addAttachment(
                "confirmation-reservation.pdf",
                new ByteArrayResource(pdfBytes)
        );

        // 4️⃣ Envoyer
        mailSender.send(message);
    }


    public void sendPasswordResetCodeEmail(Utilisateur user, String code)
            throws MessagingException {

        Context ctx = new Context();
        ctx.setVariable("name", user.getName());
        ctx.setVariable("code", code);
        ctx.setVariable("companyName", "En Ligne Booking");
        ctx.setVariable("year", Year.now().getValue());
        ctx.setVariable("companyAddress", "Casablanca, Maroc");

        ctx.setVariable("emailInlineMode", true); // optionnel

        String htmlContent = templateEngine.process("emailPasswordReset", ctx);



        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper =
                new MimeMessageHelper(message, true, "UTF-8");

        helper.setTo(user.getEmail());
        helper.setSubject("🔐 Code de réinitialisation du mot de passe");
        helper.setText(htmlContent, true);

        mailSender.send(message);
    }





}
