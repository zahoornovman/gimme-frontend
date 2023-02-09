import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    acceptance: "notAnswered"
}
const acceptanceSlice = createSlice({
    name: 'acceptance',
    initialState,
    reducers: {
        reply: (state, { payload }) => {
            state.acceptance = payload.reply
        }
    }
})


const reducer = acceptanceSlice.reducer;
const reply = acceptanceSlice.actions.reply

export { reply, reducer }