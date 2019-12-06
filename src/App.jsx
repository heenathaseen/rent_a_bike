
import React from 'react';
import './App.scss';
import Header from './Header';
import Slider from './Slider';
import Service from './Service';
import Anybike from './Anybike';
import Mostinteresting from './Mostinteresting';
import Anywhere from './Anywhere';
import Button from './Button';
import Latestnews from './Latestnews';
import Numbers from './Numbers';
import Gallery from './Gallery';
import Customers from './Customers';
import Typeemail from './Typeemail';
import Footerone from './Footerone';
import Footertwo from './Footertwo';
import Follow from './Follow';

const App = () => (
  <div>
    <Hs />

    <Service />
    <Mostinteresting />
    <Anywhere />
    <Button />
    <Latestnews />
    <Numbers />
    <Gallery />
    <Customers />
    <Typeemail />
    <Footerone />
    <Footertwo />
    <Follow />

  </div>
);
const Hs = () => (
  <div className="bg">
    <Header />
    <Slider />
  </div>

);


export default App;
