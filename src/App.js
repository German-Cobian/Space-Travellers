import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rocket from './components/Rocket';
import MissionsContainer from './components/MissionsContainer';
import RocketsContainer from './components/RocketsContainer';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<RocketsContainer />} />
            <Route path="/MissionsContainer" element={<MissionsContainer />} />
            <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
