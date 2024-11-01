package com.example.tinder_ai.Conversations;

import java.util.List;

public record Conversation(
        String id,
        String profileId,
        List<ChatMessage> messages
) {
}
