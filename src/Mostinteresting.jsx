import React from 'react';

import './Mostinteresting.scss';
import stunt from './stunt.jpg';
import promo from './promo.jpg';
import light from './lightbicycle.jpg';
import zoom from './zoom.jpeg';

const Mostinteresting = () => (
  <div className="most">
    <h1>dont miss the most intersting</h1>
    <div className="interesting">
      <div className="one"><img src={stunt} alt="" /></div>
      <div className="two">
        <h3>Template authors birthday</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo nesciunt delectus velit quisquam perferendis animi architecto est. Deleniti et illo nesciunt obcaecati totam delectus labore dicta, inventore sapiente quia minus.</p>

      </div>
      <div className="three"><img src={promo} alt="" /></div>
      <div className="four">

        {' '}
        <p>
          <span>
            {' '}
            <i className="fa fa-map-marker" aria-hidden="true" />
          </span>
brisrtol,uk
        </p>
        <p>
          <span><i className="fa fa-briefcase" aria-hidden="true" /></span>
aug 23 - aug 28
          <p>
            <span><i className="fa fa-clock-o" aria-hidden="true" /></span>
12.00 pm -22.00pm
          </p>
          <h4>Learnmore</h4>
        </p>
      </div>
      <div className="two">
        <h3>Christmas charity race</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. ad officiis architecto magnam. Quos enim delectus eligendi ullam vel voluptatum alias laboriosam, corporis quas?</p>
      </div>
      <div className="one"><img src={light} alt="" /></div>
      <div className="two">
        <h3>Eurobike 2016 exhibition</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. excepturi suscipit? Voluptatum incidunt ab iure, itaque eum omnis, necessitatibus corrupti quasi vel autem dolorum cumque! Quidem.
        </p>
      </div>
      <div className="one"><img src={zoom} alt="" /></div>

    </div>

  </div>
);


export default Mostinteresting;
