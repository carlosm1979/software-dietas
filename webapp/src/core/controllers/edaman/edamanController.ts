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
        
        return this.restClient.get('https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser', 
        {
            ingr: value,
            'nutrition-type': 'cooking',
            'category[0]': 'generic-foods',
            'health[0]': 'alcohol-free'
          }).then((response: {data: EdemamSearchResponse} ) => {

            return response.data.hints.map((i) => {
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