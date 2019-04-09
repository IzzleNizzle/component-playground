import React, { Component } from 'react'
import ReactForm, { ReactForm2 } from './components/ReactForm'
import FourSplit from './components/FourSplit'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FourSplit
          elemOne={<ReactForm />}
          elemTwo={<ReactForm2 />}
          elemThree={<ReactForm />}
          elemFour={"hellos"}
        />
      </div>
    );
  }
}

export default App
