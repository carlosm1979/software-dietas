import { combineReducers } from 'redux';
import {  foodsReducer } from '../foods/foodsReducer';

export const rootReducer = combineReducers({
  foods: foodsReducer,
});

