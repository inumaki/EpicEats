package com.example.backend.model;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
public class Menu {

    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Id
    int id;

    @ManyToOne
    @JoinColumn(name = "restaurant_id", referencedColumnName = "id")
    private Restaurant restaurant;

    private String itemName;
    private float price;
    private String description;
    private String image;
}
