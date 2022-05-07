import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Menu from './components/menu/Menu';
import List from './routes/list/List';
import styles from './App.module.css';
import Footer from './components/footer/Footer';
import GeolocationProvider from './navigator/geolocation/GelocationProvider';
import Error from './routes/error/Error';
import CityDetails from './routes/details/city/CityDetails';
import MyLocationDetails from './routes/details/my-location/MyLocationDetails';

function App() {
  return (
    <Router>
      <GeolocationProvider>
        <Menu />
        <main className={styles.main}>
          <Routes>
            <Route path="/details/my-location" element={<MyLocationDetails />} />
            <Route path="/details/:city" element={<CityDetails />} />
            <Route path="/" element={<List />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </GeolocationProvider>
    </Router>
  );
}

export default App;
