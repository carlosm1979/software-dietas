export interface EdamanHints {
    food: EdamanFood;
}

export interface EdamanFoodNutrients {
    CHOCDF: number;
    ENERC_KCAL: number;
    FAT: number;
    FIBTG: number;
    PROCNT: number;
}

export interface EdamanFood {
    image:string;
    label: string;
    nutrients: EdamanFoodNutrients;
}

export interface EdamanParseResponse {
    hints: EdamanHints[]
}
