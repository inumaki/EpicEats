package com.example.backend.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
public class Carousel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;
    private String name;
    private String type;

    @Lob
    @Column(name = "imageData", length = 1000)
    private byte[] imageData;

}
