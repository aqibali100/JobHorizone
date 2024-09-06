import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
