import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import FourSplit from './components/FourSplit'
// import SingleFrame from './components/SingleFrame'
// import Form from './pages/Forms'
// import ReactForm, { ReactForm2, ReactForm3 } from './components/Rea./pages/ProgressBarPageeactForm2 from './components/ReactForm'
import ProgressBarPage from './pages/ProgressBarPage'
import ReactForms from './pages/ReactForms'
import NavBizzle from './components/NavBizzle'
import FeedbackIzzle from './components/FeedbackIzzle'
// import DraggableBox from './components/DraggableBox'



export default function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <NavBizzle />
        <FeedbackIzzle />
        <Switch>
          <Route exact path="/" component={ProgressBarPage} />
          <Route exact path="/reactform" component={ReactForms} />
          <Route component={() => "404 No Match Found"} />
        </Switch>
      </Router>
    </>
  );
}
