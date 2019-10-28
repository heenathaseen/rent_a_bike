import React from 'react';
import './Gallery.scss';
import l1 from './l1.jpg';
import l2 from './l2.jpg';
import l3 from './l3.webp';
import stunt from './stunt.jpg';
import promo from './promo.jpg';
import light from './lightbicycle.jpg';
import zoom from './zoom.jpeg';
import bi1 from './bi1.jpeg';

const Gallery = () => (
  <div className="gallery">
    <div className="g1">
      {' '}
      <img src={l1} alt="" />
    </div>
    <div className="g1">
      {' '}
      <img src={l2} alt="" />
    </div>
    <div className="g1">
      {' '}
      <img src={l3} alt="" />
    </div>
    <div className="g1">
      {' '}
      <img src={stunt} alt="" />
    </div>
    <div className="g1"><img src={promo} alt="" /></div>
    <div className="g1">
      {' '}
      <img src={light} alt="" />
    </div>
    <div className="g1"><img src={zoom} alt="" /></div>
    <div className="g1">
      {' '}
      <img src={bi1} alt="" />
    </div>


  </div>
);

export default Gallery;
