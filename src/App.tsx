import React from 'react';
import './App.css';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import DataDashboardComponent from './DataDashboardComponent/DataDashboardComponent';
import MapComponent from './MapComponent/MapComponent';
import PowerOutputComponent from './PowerOutputComponent/PowerOutputComponent';
import FooterComponent from './FooterComponent/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <PowerOutputComponent />
      <DataDashboardComponent />
      <MapComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
