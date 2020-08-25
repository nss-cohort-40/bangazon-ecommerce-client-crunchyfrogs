import { Route, Redirect } from 'react-router-dom';
import React from 'react';


const ApplicationViews = () => {
  return (<>
            <Route
                exact path="/" render={props => {
                    return <h1>Returned</h1>
                }}
            />
    </>)
}


export default ApplicationViews