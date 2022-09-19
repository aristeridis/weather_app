import React, { useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [city, setCity] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=75b0bde9408feda415ad2fad17142b9f`

  const searchCity = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)      })
      setCity('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={city}
          onChange={event => setCity(event.target.value)}
          onKeyPress={searchCity}
          placeholder='Enter city'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="city">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
  
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} k/h</p> : null}
              <p>Wind Speed</p>
            </div>
          
          </div>
        


      </div>
    </div>
  );
}

export default App;