import { RestClient } from '../types';

export class FetchRestClient implements RestClient {
    get (url: string, params = {}, headers = {})  {


        return fetch(url, {
            method: 'GET',
            ...params,
            headers: {
                ...headers
            },
        })
    };
}