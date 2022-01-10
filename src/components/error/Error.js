import React from 'react';
import './error.css';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div className="error-page">
        <div className="content">
          <h1>File Not Found</h1>
          <Link to="/">
            <button id="btn">
              <i class="fas fa-long-arrow-alt-left"></i> Back to home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
