import React from 'react';
import '../styles/homepage.scss';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Announcement from '../components/Announcement';
import Feature from '../components/Feature';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Announcement type={'upper'} />
      <Feature />
      <Announcement type={'lower'} />
      <Footer />
    </div>
  );
};

export default HomePage;
