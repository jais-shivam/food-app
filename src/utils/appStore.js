import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const appStore = configureStore({
    // main reducer of whole store which consist of slice's 
    reducer:{
        cart: cartSlice,
    }
});

export default appStore;