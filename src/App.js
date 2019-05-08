import React from 'react'
// import FourSplit from './components/FourSplit'
import SingleFrame from './components/SingleFrame'
// import ReactForm from './components/ReactForm'
import ProgressBar from './components/ProgressBar'

export default function App() {
  return (

    <div className="App container">
      <SingleFrame>
        <ProgressBar />
      </SingleFrame>

      {/* <FourSplit
        elemOne={<ProgressBar />}
        elemTwo={<ProgressBar />}
        elemThree={<ProgressBar />}
        elemFour={<ProgressBar />}
      /> */}

    </div>
  );
}
