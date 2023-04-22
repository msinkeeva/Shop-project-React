import {createSlice} from "@reduxjs/toolkit"

const defaultState = {
    products: []
}

 const SearchSlice = createSlice ({
    name: "catalog",
    initialState: defaultState,
    reducers: {
    
        addToCatalog: (state, action) => {
             state.products.push(action.payload); 
             console.log(state.products)
        }
    }}
 )

 export const {addToCatalog} = SearchSlice.actions

 export default SearchSlice