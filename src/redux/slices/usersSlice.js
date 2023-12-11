import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../actions/userActions";



const initialState = {
    users: [],
    isLoading: true,
    isError: false,
};

const userSlice = createSlice ({
    name: 'users',
    initialState,
    // thunk aksiyonlarını yönetmek için extraReducers kullanılacak
    extraReducers:{
        // henüz apidan cevap gelmediyse
        [getUsers.pending]: (state) => {
            state.isLoading = true;
        },


        // apidan olumlu cevap geldiyse
        [getUsers.fulfilled]: (state, action) => {
            state.isLoading = false,
            state.users = action.payload;
            state.isError = false;
        },

        // apidan olumsuz cevap gelirse
        [getUsers.rejected]: (state, action) => {
            state.isLoading = false;
            state.isError = true;
        },
    },
});

export default userSlice.reducer;