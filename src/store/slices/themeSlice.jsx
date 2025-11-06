import { createSlice } from '@reduxjs/toolkit';

//Create the slice
const themeSlice = createSlice({
    name: "theme",
    initialState : {
        mode: "",
    },
    reducers: {
        changeTheme(state, action) {
            state.mode = action.payload;
        }
    }
})

//destructure the action we want from actions object
export const { changeTheme } = themeSlice.actions;
export default  themeSlice.reducer;