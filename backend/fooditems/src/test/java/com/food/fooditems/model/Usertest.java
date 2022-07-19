package com.food.fooditems.model;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import javax.xml.transform.Source;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class Usertest {
    private static Foodlist foodlist;

    @BeforeAll
    public static void setUp() throws Exception{
        foodlist =new Foodlist(1,"Burger",299);
        System.out.println("Burger Exception");

    }
    @Test
    public void testEmailShouldNotBeEmpty() {
        assertTrue(foodlist.getEmail().equals("abc@gmail.com"), "User email is abc@gmail.com");
    }
    @Test
    public void testfoodlistexists() {
        assertTrue(foodlist.getfooditem(),"Item exists");
    }
}
