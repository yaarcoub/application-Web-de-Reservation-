package com.example.demo.Services.PdfService;
import com.lowagie.text.Document;
import com.lowagie.text.pdf.PdfCopy;
import com.lowagie.text.pdf.PdfReader;

import java.io.ByteArrayOutputStream;
import java.util.List;

public class PdfMergeUtil {

    public static byte[] merge(List<byte[]> pdfPages) throws Exception {
        Document document = new Document();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        PdfCopy copy = new PdfCopy(document, baos);
        document.open();

        for (byte[] pdf : pdfPages) {
            PdfReader reader = new PdfReader(pdf);
            int numberOfPages = reader.getNumberOfPages();

            for (int i = 1; i <= numberOfPages; i++) {
                copy.addPage(copy.getImportedPage(reader, i));
            }
        }

        document.close();
        return baos.toByteArray();
    }
}

