import { useState } from 'react';
import './App.css';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Info from './components/sections/Info';
import { type ForecastWeatherData, type CurrentWeatherData } from './data/data';

function App() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherData | null>(null);
  const [ForecastWeather, setForecastWeather] =
    useState<ForecastWeatherData | null>(null);

  return (
    <div className='bg-background h-screen flex justify-center items-center '>
      <div className='w-7xl py-6 px-15 bg-white mx-auto rounded-3xl flex flex-col gap-6'>
        <Header
          currentWeather={currentWeather}
          setCurrentWeather={setCurrentWeather}
          setForecastWeather={setForecastWeather}
        />

        <Hero
          temp={currentWeather?.main?.temp}
          condition={currentWeather?.weather?.[0]}
          wind={currentWeather?.wind?.speed}
          humidity={currentWeather?.main?.humidity}
        />
        <Info 
        list={ForecastWeather?.list}
        />
      </div>
    </div>
  );
}

export default App;
