package com.food.fooditems.rep;

import com.food.fooditems.model.Foodlist;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FoodlistRepository extends MongoRepository<Foodlist, Integer> {
}
