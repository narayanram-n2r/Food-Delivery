package com.rps.capestone.batch11.controller;

import com.rps.capestone.batch11.FoodApplication;
import com.rps.capestone.batch11.exception.FoodException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class FoodController {

    @Autowired
    private FoodApplication foodservice;
//
//    @GetMapping("/nameAll")
//    public FoodApplication getFooditem(@PathVariable String name) throws FoodException {
////        try {
////            String result=findfooditem;
////            return new ResponseEntity(findfooditem, HttpStatus.OK);
////        } catch (Exception e) {
////            return new ResponseEntity(e.getMessage(), HttpStatus.CONFLICT);
////        }
////    }
//        return foodservice;
//    }


//
//    @PostMapping("/saveAll")
//    public ResponseEntity<?> Food saveFooditem(@RequestBody Food food, @PathVariable String name) throws FoodException {
//        System.out.println(food);
//        if(name!=null) {
//            try {
//                Food food1 = saveFooditem(food, name);
//                System.out.println(food1);
//                if(food.saveFooditem()!=null) {
//                    System.out.println(food1);
//                    return new ResponseEntity<Food>(food1, HttpStatus.CREATED);
//                }
//                else {
//                    System.out.println("fooditem not found");
//                }
//
//////            } catch (Exception e) {
//////                return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
////
////            }
//        }
////        return name;
//    }
}
