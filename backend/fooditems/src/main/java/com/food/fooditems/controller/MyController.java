package com.food.fooditems.controller;

import com.food.fooditems.model.Foodlist;
import com.food.fooditems.rep.FoodlistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/foodlist")
public class MyController {

    @Autowired
    private FoodlistRepository foodlistRepository;

    /**
     * @param foodlist foodlist is added as a parameter
     * @return
     */
    @PostMapping
    public ResponseEntity<?> addFoodlist(@RequestBody Foodlist foodlist){
        Foodlist save= this.foodlistRepository.save(foodlist);
        return ResponseEntity.ok(save);
    }

    /**
     * @return  getting all foodlists of items
     */
    @GetMapping
    public ResponseEntity<?> getFoodlists(){
        return ResponseEntity.ok(this.foodlistRepository.findAll());
    }
}
