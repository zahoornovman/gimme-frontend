import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    "id": 1,
    "title": "Vehicles"
},
{
    "id": 2,
    "title": "Boats"
},
{
    "id": 3,
    "title": "Cars"
},
{
    "id": 4,
    "title": "Motorcycles"
},
{
    "id": 5,
    "title": "RVs"
},
{
    "id": 6,
    "title": "Trailers"
}]
const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        fetchingTags: (state, { payload }) => {
            state = payload.tags
        }
    }
})


const reducer = tagsSlice.reducer;
const fetchingTags = tagsSlice.actions.fetchingTags

export { fetchingTags, reducer }