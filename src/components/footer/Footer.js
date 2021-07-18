import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer class='footer-container-fluid' id='footer'>
      <div>
        <a href=''>
          <i class='footer_icons fab fa-twitter'></i>
        </a>
        <a href=''>
          <i class='footer_icons fab fa-facebook-f'></i>
        </a>
        <a href=''>
          <i class='footer_icons fab fa-instagram'></i>
        </a>
        <a title='mailto' href='mailto:arihantdaga100@gmail.com'>
          <i class='footer_icons fas fa-envelope'></i>
        </a>
        <p class='cpyrt'>© Copyright 2021 Team Enigma</p>
      </div>
    </footer>
  );
}

export default Footer;
