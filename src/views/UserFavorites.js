import React from 'react';
import Profile from '../assets/profile.svg';
import chevronDown from '../assets/chevron-down.svg';
import starFilled from '../assets/star.svg';
import FavCards from '../components/FavCards';

function UserFavorites() {
  return (
    <>
      <div className="user-favorites">
        <div className="user-profile ">
          <img src={Profile} alt="profile" />
          <p id="user-name">Carlos Augusto Silva</p>
          <img src={chevronDown} alt="chevron-down" />
        </div>
        <div className="favorites">
          <img src={starFilled} alt="star-filled" />
          <h3>Empresas favoritas</h3>
        </div>
        <FavCards />
      </div>
    </>
  );
}

export default UserFavorites;
