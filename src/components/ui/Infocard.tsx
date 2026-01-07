import type { InfoProps } from '../../data/interface';

import { getWeatherIconUrl } from '../../utils/weatherUtils';

export default function InfoCard({ list }: InfoProps) {
  if (!list) {
    return (
      <div className='flex items-center justify-center p-8'>
        <p className='text-gray-500'>Loading weather data...</p>
      </div>
    );
  }

  if (list?.length === 0) {
    return (
      <div className='flex items-center justify-center p-8'>
        <p className='text-gray-500'>No weather forecast available</p>
      </div>
    );
  }

  // Get one forecast per day (filters to unique days)
  const dailyForecasts = list.reduce((acc, forecast) => {
    const date = new Date(forecast.dt * 1000).toDateString();
    if (!acc.find((item) => new Date(item.dt * 1000).toDateString() === date)) {
      acc.push(forecast);
    }
    return acc;
  }, [] as typeof list);

  // Helper function to display day names
  const getDayName = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', { weekday: 'short' });
    }
  };

  console.log('Daily forecasts count:', dailyForecasts.length);
  console.log(
    'Days:',
    dailyForecasts.map((f) => getDayName(f.dt))
  );

  return (
    <section
      className='grid grid-cols-5 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 xl:gap-20 justify-center items-center m-auto p-4'
      aria-label='Weather forecast'
    >
      {dailyForecasts.slice(0, 5).map((forecastDay) => (
        <div
          key={forecastDay.dt}
          className='flex flex-col items-center justify-center gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200'
          role='article'
        >
          {/* Day Name */}
          <p className='text-sm font-semibold'>{getDayName(forecastDay.dt)}</p>

          {/* Weather Icon */}
          {forecastDay.weather?.[0]?.icon && (
            <img
              src={getWeatherIconUrl(forecastDay.weather[0].icon)}
              alt={forecastDay.weather[0].description || 'Weather icon'}
              className='w-16 h-16'
              loading='lazy'
            />
          )}

          {/* Temperature Range */}
          <div className='flex items-center justify-center gap-2'>
            <div className='flex flex-col items-center'>
              <span className='text-lg font-bold'>
                {Math.round(forecastDay.main.temp_max)}°
              </span>
              <span className='text-xs text-gray-500'>High</span>
            </div>
            <div className='h-4 w-px bg-gray-300'></div>
            <div className='flex flex-col items-center'>
              <span className='text-lg text-gray-600'>
                {Math.round(forecastDay.main.temp_min)}°
              </span>
              <span className='text-xs text-gray-500'>Low</span>
            </div>
          </div>

          {/* Weather Condition */}
          <p
            className='text-sm text-primary/50 text-center capitalize'
            title={forecastDay.weather?.[0]?.main}
          >
            {forecastDay.weather?.[0]?.description}
          </p>
        </div>
      ))}
    </section>
  );
}
