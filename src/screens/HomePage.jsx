import React from 'react';
import '../styles/homepage.scss';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
    </div>
  );
};

export default HomePage;
