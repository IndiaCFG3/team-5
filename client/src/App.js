import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn.js';
import ForgetPassword from './components/ForgetPassword.js';
import './App.css';
import Dashboard from './Dashboard';


/*
      /* Login Based upon the userType */
/* Dashboard -> CreateForm for admins   */
/* Dashboard -> Select Data Analysis Page based upon Project Name */
/* Data Analysis Component : Display data in some good Format : Graphs or Heatmaps */
/* Form filling page for Field Workers 
*/
function App() {
  return (

    <div>

      <div className="App">
        <h1>Navigate to dashboard2.html </h1>
        {/* Login Based upon the userType */}
        {/* Dashboard -> CreateForm for admins   */}
        {/* Dashboard -> Select Data Analysis Page based upon Project Name */}
        {/* Data Analysis Component : Display data in some good Format : Graphs or Heatmaps */}
        {/* Form filling page for Field Workers */}
        <button ><a href="dashboard2.html">Navigate to dashboard</a></button>


        {/* <Dashboard /> */}

      </div>

      {/* <Router>
        <div className="App">
          <Route exact path="/" component={SignIn} />
          <Route exact path="/forget" component={ForgetPassword} />
        </div>
      </Router> */}

    </div >

  );
}

export default App;
