import { User, MessageCircle } from 'lucide-react';
import ProfileSelector from './ProfileSelector';
import MatchesList from './MatchesList';
import React, { useState, useEffect } from 'react';
import ChatScreen from './ChatScreen';

const Main = () => {

    const fetchRandomProfile = async () => {
        const response = await fetch('http://localhost:8080/profiles/random');
        if (!response.ok) {
            throw new Error("Failed to fetch profile");
        }
        return response.json();
    };

    const saveSwipe = async (profileId) => {
        const response = await fetch('http://localhost:8080/matches', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({profileId})
        });
        if (!response.ok) {
            throw new Error("Failed to save profile");
        }
   }

    const fetchMatches = async () => {
        const response = await fetch('http://localhost:8080/matches');
        if (!response.ok) {
            throw new Error("Failed to fetch profile");
        }
        return response.json();
    };

    const fetchConversation = async (conversationId) => {
        console.log(conversationId)
        const response = await fetch(`http://localhost:8080/conversations/${conversationId}`);
        if(!response.ok){
            throw new Error("Failed to fetch conversation");
        }
        return response.json();
        
    }


    const [currentScreen, setCurrentScreen] = useState('profile');
    const [currentProfile, setCurrentProfile] = useState(null);
    const [matches, setMatches] = useState([]); 
    const [currentMatchAndConversation, setCurrentMatchAndConversation] = useState({match: {}, conversation: []});

    const loadRandomProfile = async() => {
        try {
            const profile = await fetchRandomProfile();
            console.log("Fetched Profile:", profile);
            setCurrentProfile(profile);
        } catch (error) {
            console.error(error);
        }
    };

    const onSwipe = async (profileId, direction) => {
        loadRandomProfile();
        if(direction === "right"){
            await saveSwipe(profileId); 
            await loadMatches();
        }
     
    }

    const loadMatches = async() => {
        try {
            const matches = await fetchMatches();
            console.log("Fetched Matches:", matches);
            setMatches(matches)
        } catch (error) {
            console.error(error)
        }
    }

    const onSelectMatch = async (profile, conversationId) => {
        const conversation = await fetchConversation(conversationId);
        setCurrentMatchAndConversation({match: profile, conversation: conversation.messages});
        setCurrentScreen('chat')
    }



    useEffect(() => {
        loadRandomProfile();
        loadMatches();
    }, []);


    const renderScreen = () =>{
        switch (currentScreen) {
            case 'profile':
                return <ProfileSelector profile={currentProfile} onSwipe={onSwipe}/>;     
            case 'matches':
                return <MatchesList matches={matches} onSelectMatch={onSelectMatch}/>;
            case 'chat':
                console.log(currentMatchAndConversation)
                return <ChatScreen currentMatch={currentMatchAndConversation.match} conversation={currentMatchAndConversation.conversation}/>;
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
