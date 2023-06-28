import { FoodSearchInput } from "../components/foodSearchInput"
import { FoodList } from "../components/foodList"

export const FoodCatalog = () => {

    return (<div>
        <h1>Catalog</h1>
        <FoodSearchInput />
        <FoodList />

    </div>)
}