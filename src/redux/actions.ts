import axios from "axios";
import { Dispatch } from "redux";

export const GET_DATA = 'GET_DATA'

const options = {
    method: 'GET',
    url: 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly',
    params: {
      lat: '35.5',
      lon: '-78.5'
    },
    headers: {
      'X-RapidAPI-Key': '031d1b2ec6msha9af7129173eb4fp1b0637jsna5be83ea4344',
      'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
  };
  

const getWeather = (data:any)=>{
    return{
        type:GET_DATA,
        payload:data
    }
}

export const getData = ():(dispatch: Dispatch) => Promise<void> => {
  return async (dispatch:Dispatch) => {
    try {
      const data = await axios(options);
    dispatch(getWeather(data.data))
    } catch (error:any ) {
      console.log(error.message);
    }
  };
};


