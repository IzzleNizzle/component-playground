import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import './index.css'

// Simple render like this;
export default function ProgressApp() {
  const [goalSet, setGoalSet] = useState(false)
  const [goalAmount, setGoalAmount] = useState(50)
  const [doneAmount, setDoneAmount] = useState(0)


  const handleInputChangeProgressBar = (event) => {
    let { name, value } = event.target;
    // Do not allow negative amounts
    if (value < 0 || value === "") {
      console.log("true");
      return;
    } // else continue
    value = parseInt(value);
    if (name === "goalAmount") {
      return setGoalAmount(value)
    }
    else {
      return setDoneAmount(value)
    }
  }

  const resetAmountsProgressBar = () => {
    setGoalAmount(50)
    setDoneAmount(0)
  }

  const handleToggleClickProgressBar = () => {
    setGoalSet(!goalSet)
  }

  const addToDoneProgressBar = () => {
    setDoneAmount(parseInt(doneAmount + 1))
  }

  // This will return different components based off of different states of app
  const mainBodySwitch = () => {
    switch (goalSet) {
      // This is when goals have been set
      case true:
        return (
          <div>
            {(doneAmount / goalAmount * 100).toFixed(0) >=
              100 ? (
                <p className="progress-text">Congrats, you met your goal!</p>
              ) : (
                <p className="progress-text">
                  Goal: {goalAmount} Current Finished:{" "}
                  {doneAmount}
                </p>
              )}
            <button
              className="btn btn-primary"
              onClick={addToDoneProgressBar}
            >
              Done
            </button>
          </div>
        );
      case false:
        // This is startup page, setting goal
        return (
          <div>
            <h5>Track Your Progress!</h5>
            <div>
              Goal:{" "}
              <input
                type="number"
                name="goalAmount"
                value={goalAmount}
                onChange={handleInputChangeProgressBar}
              />
              Current Finished:{" "}
              <input
                type="number"
                name="doneAmount"
                value={doneAmount}
                onChange={handleInputChangeProgressBar}
              />
            </div>
            <button
              className="btn btn-primary"
              onClick={handleToggleClickProgressBar}
            >
              Set Goal
            </button>
            <button
              className="btn btn-danger"
              onClick={resetAmountsProgressBar}
            >
              Reset
            </button>
          </div>
        );
      default:
        return <div>Error in mainBodySwitch</div>
    }
  }

  return (
    <div className="container">
      <ProgressBar
        goalSet={goalSet}
        goalAmount={goalAmount}
        doneAmount={doneAmount}
        toggle={handleToggleClickProgressBar}
      />
      {mainBodySwitch()}
    </div>

  );
}
