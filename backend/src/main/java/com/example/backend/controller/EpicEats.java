package com.example.backend.controller;

import com.example.backend.model.Carousel;
import com.example.backend.service.CarouselService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/epiceats")
public class EpicEats {

    @Value("${image.upload.directory}")
    private String imageDirectory;

    @Autowired
    CarouselService carouselService;


    @PostMapping("/carousel")
    public String uploadImage(@RequestParam("image") MultipartFile file) throws Exception {
        carouselService.uploadToDatabase(file);
        return "File uploaded successfully "+file.getOriginalFilename();
    }

    @GetMapping("/carousel")
    public List<Carousel> getCarousel() throws Exception {
        List<Carousel> dbImageData = carouselService.getCarousel();
        return dbImageData;
    }

//    @PostMapping("/restaurant")
//    public void getRestaurant() throws Exception {
//        return;
//    }
}