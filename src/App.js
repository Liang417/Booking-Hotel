import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './styles/app.scss';
import HomePage from './screens/HomePage';
import HotelsList from './screens/HotelsList';
import Hotel from './screens/Hotel';
import Login from './screens/Login';
import Register from './screens/Register';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotelsList" element={<HotelsList />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
