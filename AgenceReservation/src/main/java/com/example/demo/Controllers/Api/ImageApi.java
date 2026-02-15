package com.example.demo.Controllers.Api;

import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

import static com.example.demo.Utils.UrlApp.*;

public interface ImageApi {

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping(value = OFFRE_IMAGE)
    public void addImages(
            @RequestParam("offreId") Integer offreId,
            @RequestParam("images") List<MultipartFile> files
                       ) throws IOException;

    @PostMapping(value = USER_IMAGE, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public String saveImageUser(@RequestParam("image") MultipartFile image) throws IOException;



    @DeleteMapping(value = DELETE_IMAGE)
    @PreAuthorize("hasRole('ADMIN')")
    public void  deleteImage(@RequestParam("id") int id) throws IOException;


}
