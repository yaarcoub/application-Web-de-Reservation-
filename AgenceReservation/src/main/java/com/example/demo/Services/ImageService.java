package com.example.demo.Services;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ImageService {
    public  void addImage(Integer id , List<MultipartFile> file) throws IOException;
    public  void  deleteImage(Integer id) throws IOException;
    public  String  addUserImage( MultipartFile files) throws IOException;
}
