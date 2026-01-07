/**
 * Maps OpenWeatherMap icon codes to Meteocons animated SVG URLs.
 * using the basmilius/weather-icons repository.
 */
export const getWeatherIconUrl = (iconCode: string): string => {
  const codeMapping: { [key: string]: string } = {
    // Clear
    '01d': 'clear-day',
    '01n': 'clear-night',
    // Clouds
    '02d': 'partly-cloudy-day',
    '02n': 'partly-cloudy-night',
    '03d': 'cloudy',
    '03n': 'cloudy',
    '04d': 'overcast-day',
    '04n': 'overcast-night',
    // Rain
    '09d': 'rain',
    '09n': 'rain',
    '10d': 'partly-cloudy-day-rain',
    '10n': 'partly-cloudy-night-rain',
    // Thunderstorm
    '11d': 'thunderstorms-day',
    '11n': 'thunderstorms-night',
    // Snow
    '13d': 'snow',
    '13n': 'snow',
    // Mist/Fog
    '50d': 'mist',
    '50n': 'mist',
  };

  const iconName = codeMapping[iconCode] || 'clear-day';
  return `https://basmilius.github.io/weather-icons/production/fill/all/${iconName}.svg`;
};
