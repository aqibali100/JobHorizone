import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Policy from './screens/Policy';
import Terms from './screens/Terms';
import About from './screens/About';
import Contact from './screens/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<Policy />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
