
import React from 'react';

import './Anybike.scss';
import one from './bi1.jpeg';
import two from './bi2.jpeg';
import three from './bi3.webp';
import four from './bi4.jpeg';


const Anybike = () => (
  <div className="anybike">
    <div className="one">
      <div className="one-1">
        <h1>any bikes your heart desires</h1>
      </div>
      <div className="one-2">
        <p>more bikes</p>
      </div>
    </div>
    <div className="table">
      
      <div className="tab-one">
        <img src={one} alt="" />
        <div className="icons">
          <ul>
            <li><i className="fa fa-map-signs" aria-hidden="true" /></li>
            <li><i className="fa fa-bicycle" aria-hidden="true" /></li>
            <li><i className="fa fa-link" aria-hidden="true" /></li>
            <li><i className="fa fa-sellsy" aria-hidden="true" /></li>
          </ul>
        </div>
        <table>
          <th>Specialized Demo 8</th>
          <tr>
            <td>1day</td>
            <td>£59/day</td>

          </tr>
          <tr>
            <td>2-6 days</td>
            <td>£49/day</td>
          </tr>
          <tr>
            <td>from 7 days</td>
            <td>£39/day</td>
          </tr>
        </table>

      </div>

    </div>

  </div>
);

export default Anybike;
