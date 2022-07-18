import React , { useState } from "react";
import './App.css';
import DateCreator from './Function/DateCreator';

//API Credentials
const API = {
  key:"your_api_key",
  base:"https://api.openweathermap.org/data/2.5/"
}


function App() {
  const [ query , setQuery ] = useState('');
  const [ weather , setWeather ] = useState({});

  const ENDPOINT = API.base + "weather?q=" + `${query}&units=metric&appid=` + API.key;

  const search = (event) => {
      if(event.key === "Enter")
      {
          fetch(ENDPOINT)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery("");
            console.log(result);

          })
          .catch(error => 
            {
              console.error(error.message);
            }
          )
      }
  }

  return (
  <div className={(typeof weather.main != "undefined") 
  ? ((weather.main.temp > 16) 
    ? 'h-screen bg-image-warm' 
    : 'bg-image-cold') 
  : 'h-screen bg-image-warm'}>
    <main className="overlay flex justify-center items-center flex-col gap-y-4">
      <header className="text-white font-bold absolute top-2 glassatile px-4 py-2 rounded-lg text-4xl text-center">Welcome To GlobeWeather</header>
      <div className="w-1/2">
        <input className="font-mono border-2 border-blue-300 rounded-lg px-4 py-2 w-full outline-none text-blue-500 bg-gray-200 focus:bg-white" 
        placeholder="enter city" 
        type="text" 
        onChange={ e => setQuery(e.target.value)}
        value = {query}
        onKeyDown = {search} >
        </input>
      </div>

      {(typeof(weather.main) != "undefined") 
      ? 
      (
        <div>
          <div className="mb-4 text-white text-center glassatile p-2 rounded-lg">
            <section>{weather.name} , {weather.sys.country}</section>
            <section>{Math.floor(weather.main.temp)}&#176;C</section>
            <section>
              <span>{weather.weather[0].main}</span>
            </section>
          </div>
          <div className='glassatile p-2 rounded-lg text-white text-center font-bold'>
            <section >{DateCreator(new Date())}</section>
          </div>
        </div>
      )
      :("")}
    </main>
  </div>
  ); 
}

export { App as default };
