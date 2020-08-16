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
<<<<<<< HEAD
    <div className="App">
      <h1>Navigate to dashboard2.html </h1>
      {/* Login Based upon the userType */}
      {/* Dashboard -> CreateForm for admins   */}
      {/* Dashboard -> Select Data Analysis Page based upon Project Name */}
      {/* Data Analysis Component : Display data in some good Format : Graphs or Heatmaps */}
      {/* Form filling page for Field Workers */}



      {/* <Dashboard /> */}

    </div>
=======
    <Router>
      <div className="App">
        <Route exact path="/" component={SignIn}/>
        <Route exact path="/forget" component={ForgetPassword}/>
      </div>
    </Router>
>>>>>>> eedad12ab11680824b26be5ad67779cb0b944967
  );
}

export default App;
