import type { InfoProps } from "../../data/interface";
import InfoCard from "../ui/Infocard";

export default function Info({list} : InfoProps){
    return(
        <>
        <InfoCard list={list} />
        </>
    )
}