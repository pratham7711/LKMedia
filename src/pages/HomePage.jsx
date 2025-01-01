import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ImageCarousal from '../components/ImageCarousal';
import ClientCarousal from '../components/ClientCarousal';
import ClientBanner from '../components/ClientBanner';

const HomePage = () => {
  return (
    <div className='h-auto'>
      <Navbar />
      <Banner/>
      <ImageCarousal/>
      <ClientCarousal/>
      <ClientBanner/>
      
    </div>
  );
};

export default HomePage;
