import React from 'react';

function Carousel() {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-bs-ride='carousel'>
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='Slide 1'></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='1'
          aria-label='Slide 2'></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='2'
          aria-label='Slide 3'></button>
      </div>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img
            src='https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2075&q=80'
            className='d-block '
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            className='d-block '
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://images.unsplash.com/photo-1593417033920-3c04818ee8a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
            className='d-block '
            alt='...'
          />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>

      <button className='explore'>Explore More</button>
    </div>
  );
}

export default Carousel;
