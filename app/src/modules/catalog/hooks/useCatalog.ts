import { useDispatch } from "react-redux";
import { provideFoodList } from "../../../store/foods/foodsActions";
import { Food } from "../../../models/food";

export const useCatalog = () => {
    const dispatch = useDispatch()
    

    const searchFood = async (search: string) => {
        const url = `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?ingr=${search}&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8a89367b8fmsh36406ab580100adp11d6acjsn1435fd517bea',
                'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
            }
        };
        

        const response = await fetch(url, options).then(response => response.json());
        console.warn(response)
        dispatch(provideFoodList(response.hints.map((e: any) => new Food(e.food.label))))
    }


    return {
searchFood
    }
}