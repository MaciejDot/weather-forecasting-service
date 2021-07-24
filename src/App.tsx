import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { Helmet } from "react-helmet";
import Error404 from './pages/error/Error404';
import Main from './pages/main/Main';
import { QueryClient, QueryClientProvider } from 'react-query'
import LocationDetails from './pages/location/LocationDetails';
import MyLocationDetails from './pages/location/MyLocationDetails';
import { GeoLocationContext, useSetupLocationContextValues } from './contexts/GeoLocationContext';

const client = new QueryClient({defaultOptions:{
    queries:{
        cacheTime: 60 *1000,
        staleTime: 30 *1000
    }
}})

function App() {

    const Path = (props: { children?: React.ReactNode, title: string, path: string, exact?: boolean }) =>
        <Route path={props.path} exact={props.exact}>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>
            {props.children}
        </Route>
    
    const geoLocationContextValues = useSetupLocationContextValues()

    return (
        <GeoLocationContext.Provider value={geoLocationContextValues}>
            <QueryClientProvider client={client}>
                <Router>
                    <Switch>
                        <Path exact path="/location" title="Weather in my location">
                            <MyLocationDetails />
                        </Path>
                        <Route exact path="/location/:cityName">
                            <LocationDetails />
                        </Route>
                        <Path exact path="/" title="Wheater Forecasting Service">
                            <Main />
                        </Path>
                        <Path path="*" title="404 page not found">
                            <Error404 />
                        </Path>
                    </Switch>
                </Router>
            </QueryClientProvider>
        </GeoLocationContext.Provider>
    );
}

export default App;