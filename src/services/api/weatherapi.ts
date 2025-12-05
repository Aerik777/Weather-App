import type { CurrentWeatherData, ForecastWeatherData } from "../../data/data";


const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5`;
const days = 3;

export async function getCurrentWeather(city:string) : Promise<CurrentWeatherData | "Error"> {
    const res = await fetch(`${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data: CurrentWeatherData =await res.json();
    if(!data) return ("Error");
    console.log("Current data: ",data);
    return data;
}

export async function getForecastWeather(city:string) : Promise<ForecastWeatherData | "Error"> {
    const res = await fetch (`${API_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=40`);
    const data: ForecastWeatherData = await res.json();
     if(!data) return ("Error");
    console.log(data);
    return data;
}

