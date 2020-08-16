import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/SignIn.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={SignIn}/>
      </div>
    </Router>
  );
}

export default App;
