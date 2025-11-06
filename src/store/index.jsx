//make a store
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'


//This store holds the state for this app
//All components can subscribe to the store and update the UI
const store = configureStore({
    //Slice of state managed by wish
    reducer: {
        wish: wishReducer
    }
});

