package com.example.backend.service;

import com.example.backend.model.Carousel;
import com.example.backend.repository.CarouselRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class CarouselService {

    @Autowired
    private CarouselRepository carouselRepository;

    @CachePut(value = "carousel", key = "'Carousel'")
    public List<Carousel> uploadToDatabase(MultipartFile file) throws Exception {
        try {
            Carousel carousel = new Carousel();
            carousel.setName(file.getOriginalFilename());
            carousel.setType(file.getContentType());
            carousel.setImageData(file.getBytes());
            carouselRepository.save(carousel);
            return carouselRepository.findAll();
        }
        catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Cacheable(value = "carousel", key  = "'Carousel'")
    public List<Carousel> getCarousel() throws Exception{
        try {
            return carouselRepository.findAll();
        }
        catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
