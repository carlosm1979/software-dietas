import axios from 'axios'
import { RestClient } from '../types';

export class AxiosRestClient implements RestClient {
    get (url: string, params = {})  {

        const options = {
            method: 'GET',
            url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser',
            params,
            headers: {
              'X-RapidAPI-Key': process.env.REACT_APP_EDAMAM_KEY,
              'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
            }
          };

        return axios.request(options)
    };
}