import React from 'react';
import { Link } from "react-router-dom";
import './index.css'

export default function NavBizzle(props) {
  return (
    <nav>
      <div className="nav-left-container">

        <button href='#'>IzzleNizzle</button>

      </div>

      <div className="nav-right-container">
        <Link to={'/reactform'}>React.js Form Validation</Link>
        <Link to={'/'}>Progress Bar</Link>
      </div>
    </nav>
  );
}
