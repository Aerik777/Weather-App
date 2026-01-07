import { Droplet, Wind } from 'lucide-react';
import type { HeroProps } from '../../data/interface';

import { getWeatherIconUrl } from '../../utils/weatherUtils';

export default function HeroCard({
  temp,
  condition,
  wind,
  humidity,
}: HeroProps) {
  console.log(temp);
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-primary py-0'>
        <div className='flex justify-center items-center'>
          <span className='text-9xl'>{temp}</span>
          <span className='text-9xl '>°</span>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <span className='text-left text-5xl '>{condition?.main}</span>
          {condition?.icon && (
            <img
              src={getWeatherIconUrl(condition.icon)}
              alt={condition.main}
              className='w-32 h-32'
            />
          )}
        </div>
      </div>

      <div className='text-primary font-bold'>
        <div className='flex text-xl gap-3 justify-start items-center'>
          <Wind />
          <span>{wind}mph</span>
        </div>

        <div className='flex text-xl gap-3 justify-start items-center '>
          <Droplet />
          {humidity} %
        </div>
      </div>
    </section>
  );
}
