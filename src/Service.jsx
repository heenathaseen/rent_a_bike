import React from 'react';

import './Service.scss';

const Services = ({ icon, title, content }) => (


  <div className="services">
    <i className={icon} aria-hidden="true" />
    <h2>{title}</h2>
    <p>
      {content}
    </p>
  </div>


);

const Service = () => (
  <div className="service">
    <h1>Take a maximum of riding with our service</h1>
    <div className="service-grid">
      <Services
        icon="fa fa-bicycle"
        title="recreation or hard riding"
        content="Lorem ipsum dolor sit amet,
               consectetur adipisincing elit,sed do eiusmod tempor
                incididunt ut laboreet dolore"
      />
      <Services
        icon="fa fa-link"
        title="recreation or hard riding"
        content="Lorem ipsum dolor sit amet,
               consectetur adipisincing elit,sed do eiusmod tempor incididunt ut laboreet dolore"
      />
      <Services
        icon="fa fa-sellsy"
        title="recreation or hard riding"
        content="Lorem ipsum dolor sit amet,
               consectetur adipisincing elit,sed do eiusmod tempor incididunt ut laboreet dolore"
      />
    </div>


  </div>
);

export default Service;
