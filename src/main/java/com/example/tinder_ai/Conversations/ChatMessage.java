package com.example.tinder_ai.Conversations;

import java.time.LocalDateTime;

public record ChatMessage(
        String messageText,
        String authorId,
        LocalDateTime messageTime
) {
}
