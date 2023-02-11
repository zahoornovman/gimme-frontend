import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    c1: "New",
    c2: "Used like new",
    c3: "Used good",
    c4: "Used fair",
}
const conditionsSlice = createSlice({
    name: 'conditions',
    initialState,
    reducers: {
      
    }
})


const reducer = conditionsSlice.reducer;


export { reducer }