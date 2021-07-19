import React from 'react';
import { useHistory } from 'react-router-dom';
import './Place.css';

function Place(props) {
  let history = useHistory();
  const { assignPlace, place } = props;

  return (
    <div
      className='card '
      style={{ width: '22rem', height: '25rem' }}
      onClick={() => {
        assignPlace(place);
        history.push('/cardDetails');
      }}>
      <img src={place.site.places.url} className='card-img-top' alt='...' />
      <div className='card-body'>
        <h5 className='card-title'>{place.site.places.name}</h5>
        <p className='card-text'>{place.site.places.description}</p>
      </div>
    </div>
  );
}

export default Place;
