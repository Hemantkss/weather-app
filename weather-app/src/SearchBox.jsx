import "./SearchBox.css";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from "react";


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1a8917b90e5680f2f9eefdf08effeda7";

    let getWeatherInfo =  async () => {
        try{

            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let data = await response.json();
            //console.log(data);
            let result = {
                city: data.name,
                temperature: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                feelsLike: data.main.feels_like,
                weather: data.weather[0].description
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;  
        }
        
        
    };

    

    let handleCityChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            await updateInfo(newInfo);
        } catch (err) {
            setError(true);
        }
        
    };

    return(
        <div className='SearchBox'>
            {/* <h5>Search For The Weather</h5> */}

            <form action="#" onSubmit={handleSubmit} >
                <TextField id="city" 
                    label="City Name" 
                    variant="outlined" 
                    value={city}
                    onChange={handleCityChange}
                    required
                /> <br /> <br />

               <Button variant="contained" type='submit'>Search</Button>

               {error && <p style={{color:"red"}}><b>No Such Place Exists!</b></p>}

            </form>
        </div>
    )
}