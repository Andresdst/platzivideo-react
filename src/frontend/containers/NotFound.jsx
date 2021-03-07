import React from 'react';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => (// <> es react.fragment para encapsular
  <>
    <h1>404 Error Page Not found</h1>
    <p className='zoom-area'>
      <b>Please </b>
      Check your URL
    </p>
    <section className='error-container'>
      <span>4</span>
      <span><span className='screen-reader-text'>0</span></span>
      <span>4</span>
    </section>
    <div className='link-container'>
      <a target='_blank' rel='noreferrer' href='/' className='more-link'>Visit Home</a>
    </div>
  </>
);

export default NotFound;
