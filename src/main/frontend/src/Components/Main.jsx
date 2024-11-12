import React from 'react';
import { User, MessageCircle } from 'lucide-react';
import ProfileSelector from './ProfileSelector';
import MatchesList from './MatchesList';

const Main = () => {
  return (
    <div className='max-w-md mx-auto p-4'>
      <nav className='flex justify-between mb-4'>
        <User />
        <MessageCircle />
      </nav>

    {/* <ProfileSelector/> */}
    <MatchesList/>
    </div>
  );
}


export default Main;

