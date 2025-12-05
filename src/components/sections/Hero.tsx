import type { HeroProps } from "../../data/interface";
import HeroCard from "../ui/HeroCard";



export default function Hero({  temp, condition, wind, humidity }: HeroProps){
    return(
        <>
        <HeroCard temp={temp} condition={condition} wind={wind} humidity={humidity}  />
        </>
    )
}