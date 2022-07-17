import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container text-center p-5'>
      <h1 style={{ color: 'red' }}>
        4
        <span role='img' aria-label='Crying Face'>
          😢
        </span>
        4!
      </h1>
      <h3>Page Not Found</h3>
      <p>
        Please back to <Link to='/'>home</Link> page
      </p>
    </div>
  );
};

export default NotFound;
