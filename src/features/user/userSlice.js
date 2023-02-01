import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
        id: "",
        email: "",
        first_name: "NoNa",
        last_name: "",
        username: "",
        location: "",
        refresh: "",
        acces: "",
        loading: "false",
    
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        loading: (state) => {
            state.loading = "true"
        },
        successfulSignIn: (state, {payload}) => {
            state.id = payload.id;
            state.email = payload.email;
            state.first_name = payload.first_name;
            state.last_name = payload.last_name;
            state.username = payload.username;
            state.location = payload.location;
            state.refresh = payload.refresh;
            state.acces = payload.acces;
            state.loading = "completed"
        },
        errorSignIn: (state) => {
            state.loading = "error"
        },
        signout: (state) =>{
            state = initialState
        }
    }
})

const loading = userSlice.actions.loading;
const successfulSignIn = userSlice.actions.successfulSignIn;
const errorSignIn = userSlice.actions.errorSignIn;
const signOut = userSlice.actions.signout
const reducer = userSlice.reducer;

export {loading, successfulSignIn, errorSignIn, signOut, reducer}