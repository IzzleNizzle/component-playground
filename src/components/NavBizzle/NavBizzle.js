import React from 'react';
import './index.css'

export default function NavBizzle(props) {
  return (
    <nav>
      <div className="nav-left-container">

        <a href='#'>IzzleNizzle</a>

      </div>

      <div className="nav-right-container">
        <a href='/reactform'>React.js Form Validation</a>
        <a href='/progress'>Progress Bar</a>

      </div>
    </nav>
  );
}
