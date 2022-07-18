package com.rps.capestone.batch11.model;

import org.springframework.data.annotation.Id;

public class Food {
    @Id
    private Integer item_id;
    private String item_name;
    private Double item_price;

    public Food() {
        super();
    }

    public Integer getItem_id() {
        return item_id;
    }

    public void setItem_id(Integer item_id) {
        this.item_id = item_id;
    }

    public String getItem_name() {
        return item_name;
    }

    public void setItem_name(String item_name) {
        this.item_name = item_name;
    }

    public Double getItem_price() {
        return item_price;
    }

    public void setItem_price(Double item_price) {
        this.item_price = item_price;
    }
}
