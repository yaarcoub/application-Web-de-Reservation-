package com.example.demo.Services.ServiceImage;


import net.coobird.thumbnailator.Thumbnails;
import org.springframework.web.multipart.MultipartFile;
import java.io.ByteArrayOutputStream;
import java.io.IOException;


public class ImageSize {


    public static byte[] resizeImageIfNeeded(MultipartFile file) throws IOException {
        byte[] imageBytes = file.getBytes();

        if (imageBytes.length > 10 * 1024 * 1024) {

            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            Thumbnails.of(file.getInputStream())
                    .size(1024, 1024)
                    .outputFormat("jpg")
                    .toOutputStream(baos);
            return baos.toByteArray();

        }

        return imageBytes;
    }


}
