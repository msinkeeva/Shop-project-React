import {createSlice} from "@reduxjs/toolkit"
import RouterLayout from "../components/RouterLayout"

const defaultState = {
    cart: [],
}

 const demoSlice = createSlice ({
    name: "counter",
    initialState: defaultState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item._id === action.payload._id);
            if (itemInCart) {
              itemInCart.quantity++;
              console.log(state.cart)
            } else {
              state.cart.push({ ...action.payload, quantity: 1 });
              console.log(state.cart)

            }
          },
          increment: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload);
            console.log(item.amount)
            if (item.quantity === item.amount) {
              item.quantity = item.quantity
            } else {
              item.quantity++;
            }
          }, 
          decrement: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          },
          deleteFromCart: (state, action) => {
            const removeItem = state.cart.filter((item) => item._id !== action.payload);
            state.cart.splice(removeItem, 1);
          },
    }}
 )

 export const {increment, decrement, addToCart, deleteFromCart} = demoSlice.actions

 export default demoSlice