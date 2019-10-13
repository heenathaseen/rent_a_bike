
import React from 'react';
import './Header.scss';
import flag from './flag.jpeg';

const Header = () => (
  <div className="header">
    <div className="left">
      <i className="fa fa-bars" aria-hidden="true" />
      <i className="fa fa-search" aria-hidden="true" />
    </div>
    <div className="center">
      <h1>
RENT
        <i className="fa fa-road" aria-hidden="true" />
BIKE
      </h1>

    </div>
    <div className="right">
      <i className="fa fa-user" aria-hidden="true" />
      <img src={flag} alt="" />
      <i className="fa fa-shopping-cart" aria-hidden="true" />
    </div>
  </div>
);

export default Header;
