import React from 'react';
import './Place.css';

function Place(props) {
  return (
    <div class='card' style={{ width: '18rem' }}>
      <img src={props.place.url} class='card-img-top' alt='...' />
      <div class='card-body'>
        <h5 class='card-title'>{props.place.name}</h5>
        <p class='card-text'>{props.place.description}</p>
        <a href='#' class='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Place;
