package com.example.demo.Controllers;

import com.example.demo.Controllers.Api.ImageApi;
import com.example.demo.Services.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
public class ImageController implements ImageApi {

    @Autowired
    private ImageService imageService;



    @Override
    public void addImages(Integer offreId, List<MultipartFile> files) throws IOException {
        imageService.addImage(offreId,files);
    }

    @Override
    public String saveImageUser( MultipartFile image ) throws IOException {
        return imageService.addUserImage(image) ;
    }

    @Override
    public void deleteImage(int id) throws IOException {
        imageService.deleteImage(id);
    }


}
