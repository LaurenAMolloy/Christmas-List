import { createSlice } from '@reduxjs/toolkit';

//Create the slice
const themeSlice = createSlice({
    name: "theme",
    initialState : {
        theme: "",
    },
    reducers: {
        //action creator
        changeTheme(state, action) {
            state.theme = state.theme === "" ? "grinch" : "";
        }
    }
})

//destructure the action we want from actions object
export const { changeTheme } = themeSlice.actions;
export default  themeSlice.reducer;