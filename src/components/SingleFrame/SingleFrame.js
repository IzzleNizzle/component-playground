import React from 'react'
import './index.css'

// Simple render like this;
export default function SingleFrame({ children }) {

  return (
    <div className="main-container">
      {children}
    </div>
  );
}
