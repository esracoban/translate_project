import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./slices/usersSlice";
import translateSlice from "./slices/translateSlice";



export default configureStore({ 
    reducer:{ usersSlice, translateSlice},
});