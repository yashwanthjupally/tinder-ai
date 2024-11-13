import { User, MessageCircle } from 'lucide-react';
import ProfileSelector from './ProfileSelector';
import MatchesList from './MatchesList';
import React, { useState, useEffect } from 'react';
import ChatScreen from './ChatScreen';

const Main = () => {

    const [currentScreen, setCurrentScreen] = useState('profile');
    const [currentProfile, setCurrentProfile] = useState(null);

    
    const fetchRandomProfile = async () => {
        const response = await fetch('http://localhost:8080/profiles/random');
        if (!response.ok) {
            throw new Error("Failed to fetch profile");
        }
        return response.json();
    };

    const loadRandomProfile = async() => {
        try {
            const profile = await fetchRandomProfile();
            console.log("Fetched Profile:", profile);
            setCurrentProfile(profile);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadRandomProfile();
    }, []);


    const renderScreen = () =>{
        switch (currentScreen) {
            case 'profile':
                return <ProfileSelector profile={currentProfile}/>;     
            case 'matches':
                return <MatchesList selectMatch={() => setCurrentScreen('chat')}/>;
            case 'chat':
                return <ChatScreen/>;
            default:
                return null;
        }
    };  

    return (
        <div className='max-w-md mx-auto p-4'>
            <nav className='flex justify-between mb-4'>
                <User onClick={() => setCurrentScreen("profile")}/>
                <MessageCircle onClick={() => setCurrentScreen("matches")} />
            </nav>
            {renderScreen()}
        </div>
    );
};

export default Main;
