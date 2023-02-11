import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    s1: "Active",
    s2: "In negotiation",
    s3: "Not active",
    s4: "Gone",
    s5: "Under review",
}
const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
      
    }
})


const reducer = statusSlice.reducer;


export { reducer }