import React from 'react'
import SingleFrame from './components/SingleFrame'
// import ReactForm from './components/ReactForm'
import ProgressBar from './components/ProgressBar'

export default function App() {
  return (
    <div className="App container">
      <SingleFrame>
        <ProgressBar />
      </SingleFrame>
    </div>
  );
}
