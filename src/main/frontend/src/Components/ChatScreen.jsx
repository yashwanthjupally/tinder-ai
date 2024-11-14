import React, { useState } from 'react'

const ChatScreen = ({ currentMatch, conversation }) => {
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      console.log(input);
      setInput('');
    }
  }

  return (
    <div className='rounded-lg shadow-lg p-4'>
      <h2 className='text-2xl font-semibold mb-3'>chat with {currentMatch.firstName}</h2>
      <div className='h-[50vh] border rounded overflow-y-auto mb-4 pb-2'>
        {Array.isArray(conversation) && conversation.length > 0 ? (
          conversation.map((message, index) => (
            <div key={index}>
              <div className='mb-4 p-2 text-xl rounded bg-gray-100'>
                {message.messageText}
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
          className='bg-blue-500 text-white rounded p-2'
          onClick={sendMessage}> Send</button>
      </div>
    </div>
  )
}

export default ChatScreen
