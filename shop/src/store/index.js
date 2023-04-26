import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./demoSlice";

const store = configureStore({
    reducer: {
        counter: demoSlice.reducer 
    }
})

export default store