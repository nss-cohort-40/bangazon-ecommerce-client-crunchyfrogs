import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {

  const [isCurrentUser, setIsCurrentUser] = useState(false)

  return (
    <>
        <Router>
        <Route render={props => (
                <NavBar {...props} setIsCurrentUser={setIsCurrentUser} />
            )} />
          <ApplicationViews isCurrentUser={isCurrentUser} setIsCurrentUser={setIsCurrentUser} />
        </Router>
    </>
  );
}

export default App;
