import { RestClient } from "./types";

export class FetchClient implements RestClient {
    public get = async (url: string, options: any) => {
        return await fetch(url, {
            method: 'GET',
            ...options
        }).then(response => response.json());
    };
}