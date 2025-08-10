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

const themeSlice = createSlice({
    name: 'theme',
    initialState: { mode: 'dark' }, // or 'light' as default
    reducers: {
        setTheme: (state, action) => {
            state.mode = action.payload;
        },
        toggleTheme: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        }
    }
});

export const { setNavbarVariant } = navbarSlice.actions;
export const { setTheme, toggleTheme } = themeSlice.actions;


export const store = configureStore({
    reducer: {
        navbar: navbarSlice.reducer,
        theme: themeSlice.reducer,
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;