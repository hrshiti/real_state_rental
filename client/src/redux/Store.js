// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/Counter";

import clientReducer from "./slices/clientSlice"
import userReducer from "./slices/userSlice"
import authReducer from "./slices/authSlice"





export const store = configureStore({
  reducer: {
    counter: counterReducer,
  
    clients: clientReducer,
    users: userReducer,
    auth: authReducer,
  },
});
