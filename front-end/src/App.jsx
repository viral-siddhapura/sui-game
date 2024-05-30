import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Evolution from './pages/Evolution';
import Accessories from './pages/Accessories';
import NFTs from './pages/NFTs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={"Hello"}/>
          <Route path='/nfts' element={<NFTs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/evolution' element={<Evolution />} />
          <Route path='/accessories' element={<Accessories />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
