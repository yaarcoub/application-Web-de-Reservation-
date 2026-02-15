package com.example.demo.Services.implementation;

import com.example.demo.Dto.ImageDto;
import com.example.demo.Model.ImageOffre;
import com.example.demo.Model.Offre;
import com.example.demo.Model.Utilisateur;
import com.example.demo.Repo.ImageOffreRepo;
import com.example.demo.Repo.OffreRepo;
import com.example.demo.Repo.UtilisateurRepo;
import com.example.demo.Services.ActiveMQ.DomainEvent;
import com.example.demo.Services.ActiveMQ.EntityType;
import com.example.demo.Services.ActiveMQ.EventProducer;
import com.example.demo.Services.ActiveMQ.EventType;
import com.example.demo.Services.ImageService;
import com.example.demo.Services.ServiceImage.CloudinaryService;
import com.example.demo.exception.EntityNotFoundException;
import com.example.demo.exception.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class ImageImp implements ImageService {

    @Autowired
    private UtilisateurRepo utilisateurRepo;

    @Autowired
    private OffreRepo offreRepo ;
    @Autowired
    private ImageOffreRepo imageOffreRepo ;
    @Autowired
    private CloudinaryService cloudinaryService ;

    @Autowired
    private EventProducer eventProducer ;

    @Override
    public void deleteImage(Integer id) throws IOException {
        ImageOffre imageOffre =  imageOffreRepo.findById(id).orElseThrow(
                ()-> new EntityNotFoundException(
                        "Image n'existe pas", ErrorCode.IMAGE_NOT_FOUND)
        );

        ImageDto imageDto = new ImageDto();
        Offre offre = imageOffre.getOffre() ;
        imageDto.setTypeOffre(offre.getTypeOffre());
        imageDto.setIdOffre(offre.getId());
        imageDto.setId(id);
        cloudinaryService.deleteImage(imageOffre.getPublic_id());

        imageOffreRepo.delete(imageOffre);
        DomainEvent<ImageDto> dtoDomainEvent = new DomainEvent<>(EventType.IMAGE_DELETED, EntityType.IMAGE,imageDto);
        eventProducer.publish(dtoDomainEvent);

    }

    @Override
    public String addUserImage(MultipartFile file) throws IOException {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        Utilisateur user = utilisateurRepo.findUtilisateurByEmail(email);

        // 🔴 Supprimer l’ancienne image si existe
        if (user.getPublic_id() != null && !user.getPublic_id().isEmpty()) {
            cloudinaryService.deleteImage(user.getPublic_id());
        }

        // 🔴 Upload nouvelle image
        Map<String, String> uploadResult = cloudinaryService.uploadImage(file);

        user.setUserImage(uploadResult.get("url"));
        user.setPublic_id(uploadResult.get("public_id"));

        utilisateurRepo.save(user);

        return user.getUserImage();
    }


    @Override
    public void addImage(Integer id, List<MultipartFile> files) throws IOException {
        Offre offre = offreRepo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(
                        "Offre n'existe pas", ErrorCode.OFFER_NOT_FOUND));

        for (MultipartFile multipartFile : files){

            Map<String,String> MapUrl = cloudinaryService.uploadImage(multipartFile);
            ImageOffre imageOffre = new ImageOffre();
            imageOffre.setOffre(offre);
            imageOffre.setUrl(MapUrl.get("url"));
            imageOffre.setPublic_id(MapUrl.get("public_id"));
            imageOffre = imageOffreRepo.save(imageOffre);
            ImageDto imageDto   = new ImageDto() ;
            imageDto.setId(imageOffre.getId());
            imageDto.setUrl(imageOffre.getUrl()) ;
            imageDto.setIdOffre(offre.getId());
            imageDto.setTypeOffre(offre.getTypeOffre());
            DomainEvent<ImageDto> dtoDomainEvent = new DomainEvent<>(EventType.IMAGE_ADDED, EntityType.IMAGE,imageDto);
            eventProducer.publish(dtoDomainEvent);

        }
    }




}
