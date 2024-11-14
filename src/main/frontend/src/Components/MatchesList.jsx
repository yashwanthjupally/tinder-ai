import React from 'react'

const MatchesList = ({matches, onSelectMatch}) => {
  return matches ? (
    <div className='rounded-lg shadow-lg p-4'>
        <h1 className='font-bold text-2xl mb-4'>Matches</h1>
      <ul>
        {
          matches.map((match, index) => (
            <li key={index} className='mb-3'>
              <button 
                className='w-full rounded flex items-center hover:bg-gray-100'
                onClick={() => onSelectMatch(match.profile, match.conversationId)}>
              <img src={`http://localhost:8080/images/${match.profile.imageUrl}`} className='w-16 h-16 rounded-full mr-3 object-cover'/>
              <span>
                <h3 className='text-xl font-medium'>{match.profile.firstName} {match.profile.lastName}</h3>
              </span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  ):(<div>"Loading..."</div>);
} 

export default MatchesList
