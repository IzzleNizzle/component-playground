import React from 'react'
// import FourSplit from './components/FourSplit'
import SingleFrame from './components/SingleFrame'
import Form from './pages/Forms'
import ReactForm, { ReactForm2 } from './components/ReactForm'
// import ReactForm2 from './components/ReactForm'
import ProgressBar from './components/ProgressBar'
import NavBizzle from './components/NavBizzle'
// import DraggableBox from './components/DraggableBox'



export default function App() {
  return (

    <div className="App container">
      {/* <SingleFrame>
        <ProgressBar />
      </SingleFrame> */}
      {/* <p>hello world text</p> */}

      <Form />
      {/* <SingleFrame>
        <NavBizzle /> */}
      {/* < DraggableBox /> */}
      {/* </SingleFrame> */}


      {/* <FourSplit
        elemOne={<ReactForm />}
        elemTwo={<ReactForm2 />}
        elemThree={<ProgressBar />}
        elemFour={<ProgressBar />}
      /> */}

    </div>
  );
}
