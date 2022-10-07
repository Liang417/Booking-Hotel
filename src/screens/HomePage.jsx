import React from 'react';
import '../styles/homepage.scss';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Announcement from '../components/Announcement';
import Feature from '../components/Feature';

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Announcement />
      <Feature />
    </div>
  );
};

export default HomePage;
