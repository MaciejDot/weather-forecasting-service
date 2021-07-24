import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {Helmet} from "react-helmet";
import Error404 from './pages/error/Error404';

function App() {

  const Path = (props: {children?: React.ReactNode, title: string, path: string, exact?:boolean})=>
    <Route path={props.path} exact={props.exact}>
        <Helmet>
            <title>{props.title}</title>
        </Helmet>
        {props.children}
    </Route>

  return (
    <Router>
      <Switch>
        <Path exact path="/your-location" title="Wheater in your location">
            your location
        </Path>
        <Route exact path="/location/:city">
             city
        </Route>
        <Path exact path="/" title="Wheater Forecasting Service">
            main content
        </Path>
        <Path path="*" title="404 page not found">
            <Error404 />
        </Path>
      </Switch>
  </Router>
  );
}

export default App;