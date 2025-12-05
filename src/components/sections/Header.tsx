import type React from 'react';
import {
  type CurrentWeatherData,
  type ForecastWeatherData,
} from '../../data/data';
import SearchBox from '../../features/SearchBox';

interface HeaderProps {
  currentWeather: CurrentWeatherData | null;
  setCurrentWeather: React.Dispatch<
    React.SetStateAction<CurrentWeatherData | null>
  >;
  setForecastWeather: React.Dispatch<
    React.SetStateAction<ForecastWeatherData | null>
  >;
}

export default function Header({
  currentWeather,
  setCurrentWeather,
  setForecastWeather,
}: HeaderProps) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // getMonth() returns 0-11 for Jan-Dec
  const day = today.getDate();
  const formattedate = `${day}.${month}.${year}`;
  return (
    <header className='flex items-center justify-between font-sans text-lg font-semibold'>
      <div className='p-2 w-10'>
        <span>{currentWeather? currentWeather.name:'City'}</span>
      </div>
      <SearchBox setCurrentWeather={setCurrentWeather} setForecastWeather={setForecastWeather} />

      <div className='p-2'>
        <span>{formattedate}</span>
      </div>
    </header>
  );
}
