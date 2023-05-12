import { useState } from "react"
import { getWeather } from "../services/todos"
import { Overlay } from "./Overlay"

function getWeatherValue() {

}

export function GetWeather({setShowWeather}){

    const [weather, setWeather] = useState([]);

    const close = ()=> {
        setShowWeather(false)
    };

    getWeather().then((weather)=>
        setWeather(weather)
    );

    const weatherArray = weather.toString().split(" ")

    // const weatherArray = weatherStr.split(" ")

    const weatherTemp = weatherArray[1]
    const weatherHum = weatherArray[4]
    const weatherPres = weatherArray[7]
    const weatherWind = weatherArray[10]
    


    return (
        <Overlay close={close} headerTitle={"Sää, Rovaniemi"}>
            <div>
                <p>Lämpötila: {weatherTemp} °C</p>
                <p>Ilmankosteus: {weatherHum} %</p>
                <p>Ilmanpaine: {weatherPres} hPa</p>
                <p>Tuulennopeus: {weatherWind} m/s</p>
            </div>
        </Overlay>
    );
}