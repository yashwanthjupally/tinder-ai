package com.example.tinder_ai.Matches;

import com.example.tinder_ai.Conversations.Conversation;
import com.example.tinder_ai.Conversations.ConversationRepository;
import com.example.tinder_ai.Profiles.Profile;
import com.example.tinder_ai.Profiles.ProfileRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
public class MatchController {

    private final ConversationRepository conversationRepository;
    private final ProfileRepository profileRepository;
    private final MatchRepository matchRepository;

    public MatchController(ConversationRepository conversationRepository, ProfileRepository profileRepository, MatchRepository matchRepository) {
        this.conversationRepository = conversationRepository;
        this.profileRepository = profileRepository;
        this.matchRepository = matchRepository;
    }

    public record CreateMatchRequest(String profileId){}


    @CrossOrigin(origins = "*")
    @PostMapping("/matches")
    public Match createNewMatch(@RequestBody CreateMatchRequest request){
        Profile profile = profileRepository.findById(request.profileId())
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Unable to find a profile with ID " + request.profileId()
                ));

        Conversation conversation = new Conversation(
                UUID.randomUUID().toString(),
                profile.id(),
                new ArrayList<>()
        );
        conversationRepository.save(conversation);

        Match match = new Match(
                UUID.randomUUID().toString(),
                profile,
                conversation.id()
        );
        matchRepository.save(match);
        return match;
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/matches")
    public List<Match> getAllMatches(){
        return matchRepository.findAll();
    }


}
