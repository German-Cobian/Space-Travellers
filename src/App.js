import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import MissionsContainer from './components/MissionsContainer';
import RocketsContainer from './components/RocketsContainer';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<RocketsContainer />} />
            <Route path="/MissionsContainer" element={<MissionsContainer />} />
            <Route path="/MyProfile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
