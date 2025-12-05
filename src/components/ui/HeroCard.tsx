import { Droplet, Wind } from 'lucide-react';
import type { HeroProps } from '../../data/interface';




export default function HeroCard( {temp, condition, wind, humidity} : HeroProps ) {

  console.log(temp);
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-primary py-0'>
        <div className='flex justify-center items-center'>
          <span className='text-[200px]'>{temp}</span>
          <span className='text-[200px] '>°</span>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <span className='text-left text-5xl '>{condition?.main}</span>
       <img src={`https://openweathermap.org/img/wn/${condition?.icon}@2x.png`} alt='' />
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
