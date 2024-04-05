import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Error 404: Page not found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <p>
        Go back to the <Link to="/">homepage</Link>.
      </p>
    </div>
  );
};

export default ErrorPage;
