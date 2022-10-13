import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './styles/app.scss';
import HomePage from './screens/HomePage';
import HotelsList from './screens/HotelsList';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hotelsList" element={<HotelsList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
