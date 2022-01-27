import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Rocket from './components/Rocket';
import MissionsContainer from './components/MissionsContainer';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Rocket />} />
            <Route path="/MissionsContainer" element={<MissionsContainer />} />
            <Route path="/MyProfile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
