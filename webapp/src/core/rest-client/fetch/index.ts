import { RestClient } from '../types';

export class FetchRestClient implements RestClient {
    get (url: string, headers = {})  {
        
        return fetch(url, {
            method: 'GET',
            headers: {
                ...headers
            },
        })
        .then((response) => response.json())
    };
}