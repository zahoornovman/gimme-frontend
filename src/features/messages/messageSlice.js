import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessedFromOfferOrRequest:"",
    accessedFromID: ""
}
const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        lastPath: (state, { payload }) => {
            state.accessedFromOfferOrRequest = payload.type
            state.accessedFromID = payload.id
        }
    }
})


const reducer = messageSlice.reducer;
const lastPath = messageSlice.actions.lastPath


export { lastPath, reducer }