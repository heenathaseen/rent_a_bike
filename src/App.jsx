
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

const App = () => (
  <div>
    <Hs />
    <Anybike />
    <Service />
    <Mostinteresting />
    <Anywhere />
    <Button />
    <Latestnews />
    <Numbers />
    <Gallery />
    <Customers />

  </div>
);
const Hs = () => (
  <div className="bg">
    <Header />
    <Slider />
  </div>

);


export default App;
