import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Navbar from './components/navBar';
import Home from './components/home';
import Quote from './components/qoute';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
