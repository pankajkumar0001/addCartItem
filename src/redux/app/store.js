import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../feature/productSlice';


 export const store = configureStore({
    reducer:rootReducer,
 });
