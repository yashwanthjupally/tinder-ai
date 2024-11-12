import { User, MessageCircle } from 'lucide-react';
import ProfileSelector from './ProfileSelector';
import MatchesList from './MatchesList';
import React, { useState } from 'react';
import ChatScreen from './ChatScreen';

const Main = () => {

    const [currentScreen, setCurrentScreen] = useState('profile')

    const renderScreen = () =>{
        switch (currentScreen) {
            case 'profile':
                return <ProfileSelector/>;
            
            case 'matches':
                return <MatchesList/>;

            case 'chat':
                return <ChatScreen/>;
        }

    }  

    return (
        <div className='max-w-md mx-auto p-4'>
            <nav className='flex justify-between mb-4'>
                <User onClick={() => setCurrentScreen("profile")}/>
                <MessageCircle onClick={() => setCurrentScreen("matches")} />
            </nav>
            {renderScreen()}
        </div>
    );


}


export default Main;

