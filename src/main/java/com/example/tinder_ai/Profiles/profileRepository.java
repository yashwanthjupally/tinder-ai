package com.example.tinder_ai.Profiles;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface profileRepository extends MongoRepository<Profile, String> {

}
