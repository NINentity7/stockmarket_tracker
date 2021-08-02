import React from 'react';
import logo from '../assets/monetus.logo.symbol.svg';
import homepage from '../assets/homepage.svg';

function Home() {
  return (
    <>
      <div className="home">
        <img className="monetus-logo" src={logo} alt="logo" />
        <img className="home-img" src={homepage} alt="homepage" />
      </div>
    </>
  );
}

export default Home;
