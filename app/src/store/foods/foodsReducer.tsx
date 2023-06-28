const initialState = {
    foodList: []
  };
  
export const foodsReducer = (state = initialState, action: any) => {
switch (action.type) {
    // manejo de acciones
    case 'PROVIDE_FOODS':
      return {
        ...state,
        foodList: action.payload
      }
    default:
    return state;
}
};
