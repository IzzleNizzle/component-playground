import React from 'react'
// import FourSplit from './components/FourSplit'
import SingleFrame from './components/SingleFrame'
import ReactForm, { ReactForm2 } from './components/ReactForm'
// import ReactForm2 from './components/ReactForm'
import ProgressBar from './components/ProgressBar'
import NavBizzle from './components/NavBizzle'



export default function App() {
  return (

    <div className="App container">
      {/* <SingleFrame>
        <ProgressBar />
      </SingleFrame> */}


      <SingleFrame>
        <NavBizzle />
      </SingleFrame>


      {/* <FourSplit
        elemOne={<ReactForm />}
        elemTwo={<ReactForm2 />}
        elemThree={<ProgressBar />}
        elemFour={<ProgressBar />}
      /> */}

    </div>
  );
}
