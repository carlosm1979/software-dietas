import { Food } from "../../../modules/searcher/models/food";
import { mockRest } from "../../../test-utils/mockRest";
import { RestClient } from "../../rest-client/types";


interface EdemamSearchResponse {
    hints: Array<{
        food: {
            label: string;
            foodId: string;
        };
    }>;
}


export default class EdamanController {
    private restClient: RestClient

    constructor(restClient: RestClient) {
        this.restClient = restClient
    }


    search(value: string): Promise<Food[]> {
        const url = `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?ingr=${value}`;

        return this.restClient.get(
            url, 
              {
                'X-RapidAPI-Key': process.env.REACT_APP_EDAMAM_KEY,
                'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
              }
        )
        .then((response: EdemamSearchResponse ) => {

            return response.hints.map((i) => {
                return new Food({
                    id: i.food.foodId,
                    description: i.food.label,
                    fat: 0,
                    fiber: 0,
                    kcal: 0,
                    netCarbohydrates: 0
                })
            })
          })  
    }
    
}