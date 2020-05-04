import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

export default () => {
  return (
    <div className="landingpage-wrapper">
      <p className="landingpage-text">Expense Manager</p>
      <Link to="./expenses" className="next-button ui circular button">
        <i className="arrow right icon"></i>
      </Link>
    </div>
  );
}