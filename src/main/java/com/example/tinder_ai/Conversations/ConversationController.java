package com.example.tinder_ai.Conversations;

import com.example.tinder_ai.Profiles.ProfileRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.UUID;

@RestController
public class ConversationController {

    private final ConversationRepository conversationRepository;
    private final ProfileRepository profileRepository;

    public ConversationController(ConversationRepository conversationRepository, ProfileRepository profileRepository) {
        this.conversationRepository = conversationRepository;
        this.profileRepository = profileRepository;
    }

    public record createConversationRequest(
            String profileId
    ){}


    @PostMapping("/conversation")
    public Conversation createNewConversation(
            @RequestBody createConversationRequest request){

        profileRepository.findById(request.profileId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Unable to find a profile with " + request.profileId()));

        Conversation conversation = new Conversation(
                UUID.randomUUID().toString(),
                request.profileId(),
                new ArrayList<>()
        );

        conversationRepository.save(conversation);
        return conversation;

    }

    @PostMapping("/conversations/{conversationId}")
    public Conversation addMessageToConversation(
            @PathVariable String conversationId,
            @RequestBody ChatMessage chatMessage
    ){
        Conversation conversation = conversationRepository.findById(conversationId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Unable to find conversation with " + conversationId));

        profileRepository.findById(chatMessage.authorId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Unable to find a profile with " + chatMessage.authorId()));

        ChatMessage messageWithTime = new ChatMessage(
                chatMessage.messageText(),
                chatMessage.authorId(),
                LocalDateTime.now()
        );

        conversation.messages().add(chatMessage);
        conversationRepository.save(conversation);
        return conversation;
    }

    @GetMapping("/conversations/{conversationId}")
    public Conversation getConversation(@PathVariable String conversationId){
        return conversationRepository.findById(conversationId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Unable to find the conversation with " + conversationId));
    }

}


