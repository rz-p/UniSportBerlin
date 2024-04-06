import React from 'react';
import { Link } from 'react-router-dom';

const NotAllowedPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Error 405: Method not allowed</h1>
      <p>You do not have the permission to access this page.</p>
      <p>
        Go back to the <Link to="/">homepage</Link>.
      </p>
    </div>
  );
};

export default NotAllowedPage;
