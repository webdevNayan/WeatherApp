import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CityTable from './components/CityTable/CityTable';
import WeatherPage from './components/WeatherPage/WeatherPage';
import './assets/styles/global.scss'; // Correct import for global styles

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<CityTable />} />
          <Route path="/weather/:cityName" element={<WeatherPage />} />
          {/* Add more routes as needed */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
