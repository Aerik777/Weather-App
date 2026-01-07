import { useState } from 'react';
import './App.css';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Info from './components/sections/Info';
const loadinggif = '/loading.gif';
import { type ForecastWeatherData, type CurrentWeatherData } from './data/data';

function App() {
  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherData | null>(null);
  const [ForecastWeather, setForecastWeather] =
    useState<ForecastWeatherData | null>(null);

  return (
    <div className='bg-background h-screen flex justify-center items-center '>
      <div className='w-7xl h-4/5 py-6 px-15 bg-white mx-auto rounded-3xl flex flex-col gap-6'>
        <Header
          currentWeather={currentWeather}
          setCurrentWeather={setCurrentWeather}
          setForecastWeather={setForecastWeather}
        />

        {!currentWeather && !ForecastWeather ? (
          <div className='flex justify-center items-center text-3xl my-auto text-gray-200'>
            <img src={loadinggif} alt='loading' className='w-50' />
          </div>
        ) : (
          <div>
            <Hero
              temp={currentWeather?.main?.temp}
              condition={currentWeather?.weather?.[0]}
              wind={currentWeather?.wind?.speed}
              humidity={currentWeather?.main?.humidity}
            />
            <Info list={ForecastWeather?.list} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
