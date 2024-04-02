import { createSlice } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

const productSlice= createSlice({
  name:"products",
  initialState:[],
  reducers:{
    fetchProductsSuccess: (state, action) =>{
      return action.payload;
    }
  } 
})
const cartSlice= createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart:(state, action)=>{
          const {id, quantity} =action.payload;
          const index= state.findIndex(item=> item.id === id);
          console.log(index);
          if(index!==-1){
           state[index].quantity += quantity
          }
          else{
            state.push(action.payload); 
          }
            
        },
        removeFromCart(state, action) {
          const index = state.findIndex(item => item.id === action.payload);
          if (index !== -1) {
            state.splice(index, 1);
          }
        },
    }
})

export const { fetchProductsSuccess } = productSlice.actions;
export const { addToCart, removeFromCart} = cartSlice.actions;



//problem create
const rootReducer = combineReducers({
   products: productSlice.reducer,
    cart: cartSlice.reducer,

})
export default rootReducer;