import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requests: "notFetched",
};
const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    setRequests: (state, { payload }) => {
      state.requests = payload.results;
    },
    addMoreRequests: (state, { payload }) => {
      state.requests = [...state.requests, ...payload.results];
    },
  },
});

const setRequestsInSlice = requestsSlice.actions.setRequests;
const setMoreRequests = requestsSlice.actions.addMoreRequests;
const reducer = requestsSlice.reducer;

export { setRequestsInSlice, setMoreRequests, reducer };
