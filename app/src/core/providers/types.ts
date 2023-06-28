export interface FoodProvider {
    searchFoodByName: (search: string) => Promise<any> 
}