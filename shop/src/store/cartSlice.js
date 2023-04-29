import {createSlice} from "@reduxjs/toolkit"

const defaultState = {
    cart: []
}

 const cartSlice = createSlice ({
    name: "counter",
    initialState: defaultState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item._id === action.payload._id)
            if (itemInCart) {
              itemInCart.quantity++
            } else {
              state.cart.push({ ...action.payload, quantity: 1 })
            }
          },
        increment: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload)
            if (item.quantity === item.amount) {
              item.quantity = item.quantity
            } else {
              item.quantity++
            }
          }, 
        decrement: (state, action) => {
            const item = state.cart.find((item) => item._id === action.payload)
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--
            }
          },
        deleteFromCart: (state, action) => {
          const removeItem = state.cart.filter((item) => item._id !== action.payload)
          state.cart.splice(removeItem, 1)
        }
    }}
 )

 export const {increment, decrement, addToCart, deleteFromCart} = cartSlice.actions

 export default cartSlice