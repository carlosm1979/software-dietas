import { useDispatch } from "react-redux";
import { provideFoodList } from "../../../store/foods/foodsActions";
import { Food } from "../../../models/food";
import { edamanProvider } from "../../../core/providers";
import { EdamanHints } from "../../../core/providers/edaman/types";

export const useCatalog = () => {
    const dispatch = useDispatch()
    
    const searchFood = async (search: string) => {
        const response = await edamanProvider.searchFoodByName(search);
        dispatch(provideFoodList(response.hints.map((hint: EdamanHints) => new Food(
            hint.food.label, 
            hint.food.image, 
            hint.food.nutrients.FAT
            ))))
    }

    return {
        searchFood
    }
}