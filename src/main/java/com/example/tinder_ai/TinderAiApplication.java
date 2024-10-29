package com.example.tinder_ai;

import com.example.tinder_ai.Profiles.Gender;
import com.example.tinder_ai.Profiles.Profile;
import com.example.tinder_ai.Profiles.profileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TinderAiApplication implements CommandLineRunner {

	@Autowired
	private profileRepository profileRepository;

	public static void main(String[] args) {
		SpringApplication.run(TinderAiApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {
		Profile profile = new Profile(
				"1",
				"Yashwanth",
				"Jupally",
				23,
				"Asian",
				Gender.MALE,
				"Software Engineer",
				"yash31.jpg",
				"INFP"
		);
		profileRepository.save(profile);
		profileRepository.findAll().forEach(System.out::println);
	}
}
