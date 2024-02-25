import { IFood } from "./tyoes";

export class Food implements IFood {
    constructor(data: IFood) {
        this.id = data.id;
        this.description = data.description;
        this.kcal = data.kcal;
        this.netCarbohydrates = data.netCarbohydrates;
        this.fat = data.fat;
        this.fiber = data.fiber;
    }
    id: string;
    kcal: number;
    netCarbohydrates: number;
    fat: number;
    fiber: number;
    description: string;
}