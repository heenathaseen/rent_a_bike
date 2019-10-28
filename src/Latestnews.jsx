
import React from 'react';
import './Latestnews.scss';
import l1 from './l1.jpg';
import l2 from './l2.jpg';
import l3 from './l3.webp';

const Latestnews = () => (
  <div className="latestnews">
    <h1>get the latest news</h1>
    <div className="news">
      <div className="news1">
        <img src={l1} alt="" />
        <h2>standard post format</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, minima voluptas amet veniam tempore quibusdam temporibus ipsum expedita nostrum voluptatibus adipisci eligendi natus sunt. Voluptate sit iusto commodi distinctio magnam.</p>
        <h3>Read More</h3>
      </div>
      <div className="news2">

        <h2>christmas charity race</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, minima voluptas amet veniam tempore quibusdam temporibus ipsum expedita nostrum voluptatibus adipisci eligendi natus sunt. Voluptate sit iusto commodi distinctio magnam.</p>
        <h3>Read More</h3>
        <img src={l2} alt="" />
      </div>
      <div className="news1">
        <img src={l3} alt="" />
        <h2>one more post</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, minima voluptas amet veniam tempore quibusdam temporibus ipsum expedita nostrum voluptatibus adipisci eligendi natus sunt. Voluptate sit iusto commodi distinctio magnam.</p>
        <h3>Read More</h3>
      </div>

    </div>
  </div>
);
export default Latestnews;
