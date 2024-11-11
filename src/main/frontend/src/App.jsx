import './App.css'
import {User, MessageCircle, X, Heart} from 'lucide-react'

const ProfileSelector = () => (
  <div className='rounded-lg overflow-hidden bg-white shadow-lg'>
    <div className='relative'>
      <img src='http://127.0.0.1:8080/163d60a2-5a92-4e64-9fe2-04bb8e866133.jpg'/>
        <div className='absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-purple-400'>
          <h2 className='text-3xl font-bold '>Emi kiyoko, 23</h2>
      </div>
    </div>
    <div className='p-4'>
        <p className='text-grey-600 mb-0 text-xl'>Fashion designer with a flair for creativity. Loves to travel and find inspiration in new places.</p>
      </div>
    <div className='p-4 flex justify-between'>
      <button onClick={() => console.log("left")} className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700'><X size={25}/> </button>
      <button onClick={() => console.log("right")} className='bg-green-500 rounded-full p-4 text-white  hover:bg-green-700'><Heart size={25}/> </button>
    </div>
  </div>
)

function App() {
  return (
    <div className='max-w-md mx-auto p-4'>
      <nav className='flex justify-between mb-4'>
        <User/>
        <MessageCircle/>
      </nav>

      <ProfileSelector/>
    </div>
  
  )
}

export default App
