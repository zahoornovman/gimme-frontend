import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tags: []
}
const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        fetchingTags: (state, { payload }) => {
            state.tags = payload.tags
        }
    }
})


const reducer = tagsSlice.reducer;
const fetchingTags = tagsSlice.actions.fetchingTags

export { fetchingTags, reducer }