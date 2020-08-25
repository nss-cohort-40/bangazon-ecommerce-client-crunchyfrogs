import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews'
import './App.css';

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
