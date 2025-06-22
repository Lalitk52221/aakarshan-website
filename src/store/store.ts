import { configureStore, createSlice } from "@reduxjs/toolkit";


const navbarSlice = createSlice({
    name:'navbar',
    initialState:{variant:"default"},
    reducers:{
        setNavbarVariant:(state,action)=>{
            state.variant = action.payload;
        }
    }
})

export const {setNavbarVariant}= navbarSlice.actions;

export const store = configureStore({
    reducer:{
        navbar:navbarSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;