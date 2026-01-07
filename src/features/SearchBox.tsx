import { Search } from 'lucide-react';
import { useState } from 'react';
import {
  getCurrentWeather,
  getForecastWeather,
} from '../services/api/weatherapi';
import type { CurrentWeatherData, ForecastWeatherData } from '../data/data';

interface Props {
  setCurrentWeather: React.Dispatch<
    React.SetStateAction<CurrentWeatherData | null>
  >;
  setForecastWeather: React.Dispatch<
    React.SetStateAction<ForecastWeatherData | null>
  >;
}

export default function SearchBox({
  setCurrentWeather,
  setForecastWeather,
}: Props) {
  const [city, setCity] = useState('');
  const [_loading, setLoading] = useState(false);
  const [_error, setError] = useState('');

  async function handleSearch(
    _e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (!city.trim()) return;
    try {
      setLoading(true);
      const currentWeather = await getCurrentWeather(city);
      const forecastWeather = await getForecastWeather(city);
      if (currentWeather !== 'Error') {
        setCurrentWeather(currentWeather);
        // console.log(currentWeather);
      } else {
        setCurrentWeather(null); // or show UI error
      }

      if (forecastWeather !== 'Error') {
        setForecastWeather(forecastWeather);
        // console.log(currentWeather);
      } else {
        setForecastWeather(null);
      }

      setLoading(false);
    } catch (err) {
      setError('City not found');
      setCurrentWeather(null);
      setForecastWeather(null);
    }
  }

  return (
    <div className=' flex justify-between items-center gap-2 p-3  rounded-full'>
      <input
        type='text'
        className='w-full border rounded-4xl px-4 py-2'
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>
        <Search />
      </button>
    </div>
  );
}
