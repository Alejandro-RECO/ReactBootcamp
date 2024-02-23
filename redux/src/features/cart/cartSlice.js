import  { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCard: (state, action) =>{
      const items = state.items.find((item) => item.id === action.payload.id);
      if(item){
        item.quantity += 1
      }else{
        state.items.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) =>{
      const index = state.items.findIndex((item) => item.id === action.payload)
      if(index !== -1){
        state.items.splice(index, 1);
      }
    }
  }
});

export const {addToCard, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;