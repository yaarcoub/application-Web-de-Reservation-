package com.example.demo.Utils;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.EncodeHintType;
import com.google.zxing.MultiFormatWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.client.j2se.MatrixToImageWriter;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import javax.imageio.ImageIO;

public class QrUtil {

    // Génère l'image QR
    private static BufferedImage generateQrImage(String text, int size) throws Exception {
        Map<EncodeHintType, Object> hints = new HashMap<>();
        hints.put(EncodeHintType.MARGIN, 1); // bordures fines

        BitMatrix bitMatrix = new MultiFormatWriter().encode(
                text,
                BarcodeFormat.QR_CODE,
                size,
                size,
                hints
        );
        return MatrixToImageWriter.toBufferedImage(bitMatrix);
    }


    // Convertit l'image QR en base64 PNG
    private static String toBase64Png(BufferedImage image) throws Exception {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        ImageIO.write(image, "png", baos);
        baos.flush();
        byte[] bytes = baos.toByteArray();
        baos.close();

        return Base64.getEncoder().encodeToString(bytes);
    }

    // Retourne directement un data-uri utilisable dans Thymeleaf <img > dans Html file

    public static String dataUri(String text, int size) throws Exception {
        BufferedImage img = generateQrImage(text, size);
        String base64 = toBase64Png(img);
        return "data:image/png;base64," + base64;
    }
}
