import React from 'react';
import './Features.css';

function Features() {
  return (
    <div className='feature-container-fluid'>
      <div className='row'>
        <div className='feature-box col-lg-4'>
          <i className='fas fa-check-circle fa-6x feature-icons'></i>
          <h3>Easy to use</h3>
          <p>So easy to use, even your dog can do it.</p>
        </div>
        <div className='feature-box col-lg-4'>
          <i className='fas fa-bullseye fa-6x feature-icons'></i>
          <h3>Elite Clientele</h3>
          <p>We have the best overview for your search.</p>
        </div>
        <div className='feature-box col-lg-4'>
          <i className='fas fa-heart fa-6x feature-icons'></i>
          <h3>Brief</h3>
          <p>Find your Favourite Destination within minutes</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
