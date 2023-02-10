import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lastPage: "notSignUp"
}
const lastPageBeforeSignInSlice = createSlice({
    name: 'lastPageBeforeSignIn',
    initialState,
    reducers: {
        lastPage: (state, { payload }) => {
            state.lastPage = payload.lastPage
        }
    }
})


const reducer = lastPageBeforeSignInSlice.reducer;
const lastPage = lastPageBeforeSignInSlice.actions.lastPage

export { lastPage, reducer }