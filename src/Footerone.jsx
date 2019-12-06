import React from 'react';
import './Footerone.scss';
import l1 from './l1.jpg';
import l2 from './l2.jpg';

const Footerone = () => (
  <div className="footerone">

    <div className="menu">
      <h3>Menu</h3>
      <p>Home</p>
      <p>Bikes</p>
      <p>tours</p>
      <p>Blogs</p>
      <p>Aboutus</p>
    </div>
    <div className="information">
      <h3>Information</h3>
      <ul>
        <li>
            choosing bike size
        </li>
        <li>how to bynny Hop?</li>
        <li>
Top-10 ofBike parks

        </li>
        <li>FirestAid After Bike Crash</li>
      </ul>
    </div>
    <div className="news">
      <h3>latest news</h3>
      <div className="one">
        <img src={l1} alt="" />
        <p>Lorem, ipsum dolor sit </p>
        <span>5days ago</span>
      </div>
      <div className="two">
        <img src={l2} alt="" />
        <p>Lorem, ipsum dolor sit </p>
        <span>5days ago</span>
      </div>


    </div>


    <div className="aboutus">
      <h3>About us</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde eius distinctio facilis, ad totam deleniti? Ea, placeat quam explicabo alias qui, ex velit amet reprehenderit, sunt corporis natus esse dicta!</p>

    </div>
  </div>
);
export default Footerone;
