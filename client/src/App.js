import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn.js';
import ForgetPassword from './components/ForgetPassword.js';
import './App.css';

/*
      /* Login Based upon the userType */
      /* Dashboard -> CreateForm for admins   */
      /* Dashboard -> Select Data Analysis Page based upon Project Name */
      /* Data Analysis Component : Display data in some good Format : Graphs or Heatmaps */
      /* Form filling page for Field Workers 
*/
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={SignIn}/>
        <Route exact path="/forget" component={ForgetPassword}/>
      </div>
    </Router>
  );
}

export default App;
