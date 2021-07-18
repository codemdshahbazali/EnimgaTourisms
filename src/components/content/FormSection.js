import React from 'react';
import './FormSection.css';

function FormSection() {
  return (
    <div>
      <h2>Get In Touch</h2>
      <div class='container'>
        <form action=''>
          <textarea
            id='messsage'
            name='message'
            placeholder='Get Message..'
            style={{ height: '200px' }}></textarea>
          <input
            type='text'
            id='fname'
            name='firstname'
            placeholder='Your name..'
          />
          <input type='email' id='email' name='email' placeholder='Email..' />
          <input
            type='text'
            id='Subject'
            name='Subject'
            placeholder='Enter Subject'
          />

          <input type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}

export default FormSection;
