export const currentWeather = {
  city: 'kathmandu',
  date: '2024-04-21',
  time: '12:27 PM',
  temperature: 20,
  feelsLike: 19,
  condition: 'Cloudy',
  wind: 6.1, // mph
  humidity: 90, // %
};

export const weeklyForecast = [
  { day: 'Today', temp: 20, condition: 'Mist' },
  { day: 'Tue', temp: 32, condition: 'Sunny' },
  { day: 'Wed', temp: 12, condition: 'Rainy' },
  { day: 'Thu', temp: 13, condition: 'Rainy' },
  { day: 'Fri', temp: 22, condition: 'Mist' },
  { day: 'Sat', temp: 22, condition: 'Mist' },
  { day: 'Sun', temp: 18, condition: 'Cloudy' },
];

export const hourlyForecast = [
  { time: '1 PM', temp: 20, condition: 'Cloudy' },
  { time: '2 PM', temp: 21, condition: 'Rainy' },
  { time: '3 PM', temp: 21, condition: 'Rainy' },
  { time: '4 PM', temp: 20, condition: 'Cloudy' },
  { time: '5 PM', temp: 21, condition: 'Rainy' },
  { time: '6 PM', temp: 21, condition: 'Rainy' },
  { time: '7 PM', temp: 19, condition: 'Cloudy' },
];

// For current weather
//  // data/data.ts
export interface CurrentWeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ForecastWeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: Array<{
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
    };
    visibility: number;
    pop: number;
    dt_txt: string;
  }>;
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}
