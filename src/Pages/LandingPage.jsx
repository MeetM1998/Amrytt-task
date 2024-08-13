import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="bg-bg-image bg-cover bg-center flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold text-white mb-6">Welcome to Amrytt App</h1>
        <p className="text-lg text-white mb-6">
          Your gateway to awesome features. Sign up or login to get started.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
