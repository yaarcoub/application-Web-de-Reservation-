package com.example.demo.Services.PdfService;

import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;
import org.xhtmlrenderer.pdf.ITextRenderer;

import java.io.ByteArrayOutputStream;

import java.nio.file.Files;
import java.nio.file.Path;

import java.util.Map;

@Service
public class PdfService {

    private final TemplateEngine templateEngine;

    public PdfService(TemplateEngine templateEngine) {
        this.templateEngine = templateEngine;
    }


    public byte[] generatePdfForLine(Map<String, Object> model , String template ) throws Exception {
        Context ctx = new Context();
        ctx.setVariables(model);

        String htmlContent = templateEngine.process(template, ctx);

        try (ByteArrayOutputStream baos = new ByteArrayOutputStream()) {
            ITextRenderer renderer = new ITextRenderer();

            renderer.setDocumentFromString(htmlContent);
            renderer.layout();
            renderer.createPDF(baos);
            baos.flush();
            return baos.toByteArray();
        }
    }

    /**
     * Exemple utilitaire pour écrire sur disque
     */
    public Path savePdf(byte[] pdfBytes, Path folder, String filename) throws Exception {
        if (!Files.exists(folder)) Files.createDirectories(folder);
        Path file = folder.resolve(filename);
        Files.write(file, pdfBytes);
        return file;
    }
}
