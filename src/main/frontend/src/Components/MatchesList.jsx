import React from 'react'

const MatchesList = () => {
  return (
    <div className='rounded-lg shadow-lg p-4'>
        <h1 className='font-bold text-2xl mb-4'>Matches</h1>
      <ul>
        {
          [
            {id: 1, firstName: 'lucy', lastName: 'klein', imageUrl: 'http://127.0.0.1:8080/0f242a88-609b-4329-b96d-e0486cd2c371.jpg'},
            {id: 2, firstName: 'lily', lastName: 'james', imageUrl: 'http://127.0.0.1:8080/02a70078-23bc-4a0b-8c8d-3a4d039e6d60.jpg'},
            {id: 3, firstName: 'Jessica', lastName: 'Jung', imageUrl: 'http://127.0.0.1:8080/07fb670f-f051-43d2-a0e7-227ae8ba2fa4.jpg'}
          ].map(match => (
            <li key={match.id} className='mb-3'>
              <button className='w-full rounded flex items-center hover:bg-gray-100 '>
              <img src={match.imageUrl} className='w-16 h-16 rounded-full mr-3 object-cover'/>
              <span>
                <h3 className='text-xl font-medium'>{match.firstName} {match.lastName}</h3>
              </span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default MatchesList
