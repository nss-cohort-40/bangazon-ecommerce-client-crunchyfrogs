import React from 'react';
import ApplicationViews from './ApplicationViews'
// import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Router } from 'react-router-dom';

function App() {
  return (
    <>
        {/* <Navbar /> */}
        <Router>
          <ApplicationViews />
        </Router>
    </>
  );
}

export default App;
