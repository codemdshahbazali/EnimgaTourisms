import React from 'react';
import Place from './Place';
import './Destinations.css';
import data from '../../assets/json/data.json';

function Destinations() {
  return (
    <div className='destinations__Containter'>
      {data.map((place, index) => (
        <Place key={index} place={place.site.places} />
      ))}
    </div>
  );
}

export default Destinations;
