import React from 'react';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light navbar2'>
      <div className='container-fluid navbar2'>
        <img src='LogoSvgTransperent.svg' className='logo' alt='' />
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                {' '}
                About
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Destination
              </a>
            </li>
          </ul>

          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <img src='call.png' height='12px' className='callimage' alt='' />
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                {' '}
                10(256)-928 256
              </a>
            </li>
            <li className='nav-item'>
              <img src='facebook.png' className='fbimage' alt='' />
            </li>
          </ul>

          <form className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
