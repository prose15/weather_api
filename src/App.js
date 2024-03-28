import WeatherApp from './WeatherApp';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import WeatherUpdates from './WeatherUpdates';

function App() {

  return (
    <div>
      <Routes>
      <Route path='/' element={<WeatherApp/>}/>
      <Route path="/weather/:city" element={<WeatherUpdates/>} />
      </Routes>
    </div>
  );
}
export default App;
