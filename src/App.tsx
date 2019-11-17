import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import MapComponent from './MapComponent/MapComponent';
import PowerOutputComponent from './PowerOutputComponent/PowerOutputComponent';
import FooterComponent from './FooterComponent/FooterComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <MapComponent />
      <PowerOutputComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
