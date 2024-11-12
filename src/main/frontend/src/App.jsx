import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import ProfileSelector from './Components/ProfileSelector';
import MatchesList from './Components/MatchesList';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path='/profileSelector' element={<ProfileSelector />} />
          <Route path='/matchesList' element={<MatchesList/>} />
        </Routes>
      </BrowserRouter>
  
  );
}


export default App;
