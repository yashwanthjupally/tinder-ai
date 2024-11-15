import React, { useState } from 'react';

const sayHello = async (conversationId, message) => {
    const response = await fetch(`http://localhost:8080/conversations/${conversationId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ messageText: message, authorId: 'user' })
    });
    if (!response.ok) {
        throw new Error("Failed to send message");
    }
    return response.json();
};

const ChatScreen = ({ currentMatch, conversation, refreshState }) => {
    const [input, setInput] = useState('');

    const sendMessage = async (conversation, input) => {
        if (input.trim()) {
            try {
                await sayHello(conversation.id, input);
                setInput('');  
                refreshState(); 
            } catch (error) {
                console.error("Message sending failed:", error);
            }
        }
    };

    return (
        <div className='rounded-lg shadow-lg p-4'>
            <h2 className='text-2xl font-semibold mb-3'>
                Chat with {currentMatch.firstName}
            </h2>
            <div className='h-[50vh] border rounded overflow-y-auto mb-4 pb-2'>
                {conversation.messages.length > 0 ? (
                    conversation.messages.map((message, index) => (
                        <div key={index} className='mb-3'>
                            <div className={`flex ${message.authorId === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-xs p-2 rounded-lg ${message.authorId === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                                    {message.messageText}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='flex justify-center mt-8 font-medium'>Say Hello</div>
                )}
            </div>

            <div className='flex'>
                <input
                    type="text"
                    className='border flex-1 rounded text-xl p-2 mr-2'
                    placeholder='Type a message...'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className='bg-blue-500 text-white rounded p-2 hover:bg-blue-600 transition-colors duration-200'
                    onClick={() => sendMessage(conversation, input)}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatScreen;
