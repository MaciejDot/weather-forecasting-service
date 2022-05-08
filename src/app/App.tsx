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

function App() {
  return (
    <Router>
      <GeolocationProvider>
        <Menu />
        <main className={styles.main}>
          <Routes>
            <Route path="/details/my-location" element={<>placeholder</>} />
            <Route path="/details/:city" element={<>placeholder</>} />
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
