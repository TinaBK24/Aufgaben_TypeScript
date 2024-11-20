//* Promise-TS-Level-1_2

import WeatherType from "./weather-type";

const weatherForecast: Promise<WeatherType> = new Promise((resolve, reject) => {
    const randomValue: number = Math.floor(Math.random() * 10)

    if (randomValue <= 6) {
        resolve(randomValue as WeatherType)
    } else {
        reject("Weather forecast could not be determined")
    }
})

weatherForecast
    .then((result: WeatherType) => {
        console.log("Das Wetter ist:", result)
    })
    .catch((error: string) => {
        console.error(error)
    })