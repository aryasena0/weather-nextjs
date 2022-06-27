import axios from "axios"
import { useState } from "react"
import Card from "./components/Card"
import Footer from "./components/Footer"

export default function Home() {
  const [city, setCity] = useState('default')
  const [data, setData] = useState([])
  const uri = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=aabba917c2b27d6b0f29edf196554236`

  function handleClick() {
    // fetch the openweathermap API
    axios.get(uri)
      .then(res => {
        const resData = res.data
        const weatherData = {
          name: resData.name,
          temprature: resData.main.temp,
          desc: resData.weather[0].description,
        }
        setData(weatherData)
      }).catch((err) => alert(`Invalid city name. Error type: ${err}`))
  }

  return (
    <div>
      <div className="w-full p-6 h-screen">
        <h1 className="text-4xl font-bold">Current Weather .</h1>
    <br />      
        <div className="p-4 bg-zinc-200 rounded-xl lg:w-max lg:p-8">
          <input type="text" name="city" id="cityname" onChange={(e) => setCity(e.target.value)} className='bg-slate-800 px-4 w-[70%] py-1 rounded-md lg:w-[230px]'/>
          <button type="submit" onClick={handleClick} className="px-4 py-1 bg-slate-800 text-md rounded-md ml-2 mb-2">Find</button>
          <Card name={data.name} temprature={data.temprature} desc={data.desc} city={city}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}
