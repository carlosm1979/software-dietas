import { Food } from "../../../modules/searcher/models/food";
import { mockRest } from "../../../test-utils/mockRest";
import { RestClient } from "../../rest-client/types";

export default class EdamanController {
    private restClient: RestClient

    constructor(restClient: RestClient) {
        this.restClient = restClient
    }


    search(value: string): Promise<Food[]> {
        
        return this.restClient.get('https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser', 
        {params: {
            ingr: value,
            'nutrition-type': 'cooking',
            'category[0]': 'generic-foods',
            'health[0]': 'alcohol-free'
          },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_EDAMAM_KEY,
                'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
              }}
        ).then((response: {hints: Array<{
            food:{
                label: string,
                foodId: string
            }
          }>} ) => {

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