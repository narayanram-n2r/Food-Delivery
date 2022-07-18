package com.rps.capestone.batch11.exception;

import lombok.experimental.StandardException;


public class FoodException extends Exception {
    public FoodException(String message) {
        super(message);
    }
}