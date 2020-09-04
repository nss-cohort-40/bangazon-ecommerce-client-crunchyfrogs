import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ApplicationViews from './components/ApplicationViews';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {

  const [isCurrentUser, setIsCurrentUser] = useState(false)

  const isLoged = () => {
    let session = localStorage.getItem("bangazon_token")
    if (session != undefined) {
      return true
    } else {
      return false
    }
  }

  return (
    <>
        <Router>
        <Route render={props => (
                <NavBar {...props} setIsCurrentUser={setIsCurrentUser} />
            )} />
          <div className="container-fluid" >
          <ApplicationViews isLoged={isLoged} isCurrentUser={isCurrentUser} setIsCurrentUser={setIsCurrentUser} />
          </div>
        </Router>
    </>
  );
}

export default App;
