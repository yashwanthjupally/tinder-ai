package com.example.tinder_ai.Profiles;

public record Profile(
        String id,
        String firstName,
        String lastName,
        int age,
        String ethnicity,
        Gender gender,
        String bio,
        String imageURL,
        String myersBriggsPersonalityType
) {

}
