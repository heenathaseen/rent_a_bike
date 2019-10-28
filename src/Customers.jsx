import React from 'react';
import './Customers.scss';
import l1 from './l1.jpg';
import l2 from './l2.jpg';

const Customers = () => (
  <div className="customers">
    <h1>our happy customers</h1>
    <div className="customer">
     
      <div className="cus1">
        <img src={l1} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span>-ANREW</span>
      </div>
      <div className="cus1">
        <img src={l2} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        <span>-DIR SMILE</span>
      </div>
    </div>

  </div>
);
export default Customers;
