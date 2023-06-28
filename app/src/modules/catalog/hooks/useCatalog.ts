import { useDispatch } from "react-redux";
import { provideFoodList } from "../../../store/foods/foodsActions";
import { Food } from "../../../models/food";
import { edamanProvider } from "../../../core/providers";

export const useCatalog = () => {
    const dispatch = useDispatch()
    
    const searchFood = async (search: string) => {
        const response = await edamanProvider.searchFoodByName(search);
        dispatch(provideFoodList(response.hints.map((e: any) => new Food(e.food.label, e.food.image))))
    }

    return {
        searchFood
    }
}