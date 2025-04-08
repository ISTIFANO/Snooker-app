import './App.css';
import './components/header/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/header/NavBar';
import HeroSection from './components/section/HeroSection';
import Service from './components/section/Service';
import About from './components/section/About';
import Definition from './components/section/Definition';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/shop" element={<About />} />
        </Routes>
        <HeroSection />
        <Service />
        <Definition />
      </Router>
    </>
  );
}

export default App;
