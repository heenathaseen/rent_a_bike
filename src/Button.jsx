import React from 'react';
import './Button.scss';

const Button = () => (
  <div className="button">
    {' '}
    <div className="button1">

      <h3>
        {' '}
        <span><i className="fa fa-apple" aria-hidden="true" /></span>
itunes store
      </h3>
    </div>
    <div className="button2">
      <h3>
        {' '}
        <span>
          <i className="fa fa-google-wallet" aria-hidden="true" />
        </span>
google play
      </h3>
    </div>
    <div className="button3">
      <h3>
        {' '}
        <span><i className="fa fa-windows" aria-hidden="true" /></span>
windows store
      </h3>
    </div>

  </div>

);

export default Button;
