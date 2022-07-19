package com.food.fooditems.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.function.BooleanSupplier;

@Document(collection= "food-list")

public class Foodlist {
    private int id;
    private String name;
    private int price;

    public Foodlist(int id, String name, int price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public BooleanSupplier getfooditem() {
        return null;
    }

    public Object getEmail() {
        return null;
    }

//    public Object getEmail() {
//    }
}
