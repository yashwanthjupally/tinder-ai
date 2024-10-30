package com.example.tinder_ai.Conversations;

import java.time.LocalDateTime;

public record ChatMessages(
        String messageText,
        String profileId,
        LocalDateTime messageTime
) {
}
