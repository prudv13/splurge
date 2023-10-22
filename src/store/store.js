import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import categoryReducer from './categorySlice';

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: categoryReducer,
    }
});

export default store;