package com.example.tinder_ai;

import com.example.tinder_ai.Conversations.ChatMessage;
import com.example.tinder_ai.Conversations.Conversation;
import com.example.tinder_ai.Conversations.ConversationRepository;
import com.example.tinder_ai.Profiles.Gender;
import com.example.tinder_ai.Profiles.Profile;
import com.example.tinder_ai.Profiles.ProfileRepository;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.time.LocalDateTime;
import java.util.List;


@SpringBootApplication

public class TinderAiApplication implements CommandLineRunner {

	@Autowired
	private ProfileRepository profileRepository;

	@Autowired
	private ConversationRepository conversationRepository;

	@Autowired
	private OllamaChatModel ollamaChatModel;

	public static void main(String[] args) {
		SpringApplication.run(TinderAiApplication.class, args);
	}


	@Override
	public void run(String... args) throws Exception {

		Prompt prompt = new Prompt("Do you know Krrish ?");
		ChatResponse response = ollamaChatModel.call(prompt);
		System.out.println(response.getResult().getOutput());

		profileRepository.deleteAll();
		conversationRepository.deleteAll();

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

		Profile profile2 = new Profile(
				"2",
				"Poorna",
				"Kiea",
				23,
				"Korean",
				Gender.MALE,
				"Sales Engineer",
				"pkn2.jpg",
				"TFPS"
		);
		profileRepository.save(profile2);

		profileRepository.findAll().forEach(System.out::println);

		Conversation conversation = new Conversation(
				"1",
				profile.id(),
				List.of(
						new ChatMessage("Hey", profile.id(), LocalDateTime.now())
				)
		);

		conversationRepository.save(conversation);
		conversationRepository.findAll().forEach(System.out::println);
	}
}
