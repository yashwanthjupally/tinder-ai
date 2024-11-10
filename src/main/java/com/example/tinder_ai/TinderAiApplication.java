package com.example.tinder_ai;

import com.example.tinder_ai.Profiles.ProfileCreationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication

public class TinderAiApplication implements CommandLineRunner {

	@Autowired
	private ProfileCreationService profileCreationService;

	public static void main(String[] args) {
		SpringApplication.run(TinderAiApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		profileCreationService.saveProfilesToDB();
	}
}
