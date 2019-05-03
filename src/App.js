import React from 'react'
import ReactForm from './components/ReactForm'
import SingleFrame from './components/SingleFrame'

export default function App() {
  return (
    <div className="App container">
      <SingleFrame>
        <ReactForm />
      </SingleFrame>
    </div>
  );
}
