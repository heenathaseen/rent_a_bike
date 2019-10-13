
import React from 'react';
import './App.scss';
import Header from './Header';
import Slider from './Slider';

const App = () => (
  <div>
    <Hs />

  </div>
);
const Hs = () => (
  <div className="bg">
    <Header />
    <Slider />
  </div>

);


export default App;
