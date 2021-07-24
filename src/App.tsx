import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {Helmet} from "react-helmet";

function App() {

  const Path = (props: {children?: React.ReactNode, title: string, path: string})=>
    <Route path={props.path}>
        <Helmet>
            {props.title}
        </Helmet>
        {props.children}
    </Route>

  return (
    <Router>
      <Switch>
        <Path path="/" title="Wheater Forecasting Service">
            {/*place for main content*/}
        </Path>
        <Path path="/your-location" title="Wheater in your location">
             {/*place for wheater in my location*/}
        </Path>
        <Route path="/location/:city">
             {/*place for wheater in given city*/}
        </Route>
        <Route path="*">
            {/*place for 404 error*/}
        </Route>
      </Switch>
  </Router>
  );
}

export default App;