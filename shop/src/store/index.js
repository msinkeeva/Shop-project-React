import { configureStore } from "@reduxjs/toolkit";
import demoSlice from "./demoSlice";
import Search from "../components/Search";
import SearchSlice from "./SearchSlice";

const store = configureStore({
    reducer: {
        counter: demoSlice.reducer,
        catalog: SearchSlice.reducer
    }
})

export default store