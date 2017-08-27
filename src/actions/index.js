import axios from 'axios';

const API_KEY = '6dcff46d41e8b530a478e100dd980851';
const Root_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'Fetch_WEATHER';

//action creator
export function fetchWeather(city) {


const url = `${Root_URL}&q=${city},us`;

//take url with specific city and turn into a GET request
const request = axios.get(url);

 console.log('Request:', request);

return {

type: FETCH_WEATHER,

//optional, gives details of action 
payload: request
};

}

