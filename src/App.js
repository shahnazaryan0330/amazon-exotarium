import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import { Route, Routes } from 'react-router-dom'

import Aos from "aos"
import "aos/dist/aos.js"
import "aos/dist/aos.css"
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init({ duration: 800, delay: 100})
  }, [])
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
