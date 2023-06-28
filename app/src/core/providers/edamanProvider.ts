import { RestClient } from "../rest/types";
import { FoodProvider } from "./types";

export class EdamanProvider implements FoodProvider {
    private restClient: RestClient
    private options: any = {
        headers: {
            'X-RapidAPI-Key': '8a89367b8fmsh36406ab580100adp11d6acjsn1435fd517bea',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    }
    constructor(restClient: RestClient) {
        this.restClient = restClient
    }
    searchFoodByName =  async (search: string): Promise<any> => {
        return await this.restClient.get(`https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?ingr=${search}&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free`, this.options)
    };
}