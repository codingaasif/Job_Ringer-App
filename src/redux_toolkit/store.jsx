import { configureStore } from "@reduxjs/toolkit";
import ringerAppReducer from "./slice";

const store = configureStore({
    reducer: {
        ringerApp: ringerAppReducer,
    },
});

export default store;
