import React from 'react'
import { X, Heart } from 'lucide-react';

   
const ProfileSelector = ({ profile }) => {

    if (!profile) return <div>Loading...</div>;  // Display loading message until profile is fetched
    return (
        <div className='rounded-lg overflow-hidden bg-white shadow-lg'>
            <div className='relative'>
                {profile.imageUrl && (
                    <img src={`http://192.168.0.102:8081/${profile.imageUrl}`} alt="Profile" />
                )}
                <div className='absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-purple-400'>
                    <h2 className='text-3xl font-bold '>{`${profile.firstName} ${profile.lastName} ${profile.age}`}</h2>
                </div>
            </div>
            <div className='p-4'>
                <p className='text-grey-600 mb-0 text-xl'>{`${profile.bio}`}</p>
            </div>
            <div className='p-4 flex justify-between'>
                <button onClick={() => console.log("left")} className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700'><X size={25} /> </button>
                <button onClick={() => console.log("right")} className='bg-green-500 rounded-full p-4 text-white  hover:bg-green-700'><Heart size={25} /> </button>
            </div>
        </div>
    );
};

export default ProfileSelector



