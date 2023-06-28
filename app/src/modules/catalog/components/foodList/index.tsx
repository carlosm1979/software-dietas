import { useSelector } from "react-redux"

export const FoodList = () => {
    const list = useSelector((state: any) => state.foods.foodList)
    return (<>{list && list.map((item: any) => {
        return (<div>{item.toString()}</div>)
    })}</>)
}