import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Evolution from './pages/Evolution';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' />
          <Route path='/login' element={<Login />} />
          <Route path='/evolution' element={<Evolution />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
