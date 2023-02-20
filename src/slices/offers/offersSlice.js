import { createSlice } from "@reduxjs/toolkit";

const offersSlice = createSlice({
  name: "offers",
  initialState: { offers: "notFetched" },
  reducers: {
    setOffers: (state, { payload }) => {
      state.offers = payload.results;
    },
    addMoreOffers: (state, { payload }) => {
      state.offers = [...state.offers, ...payload.results];
    },
  },
});

const setOffersInSlice = offersSlice.actions.setOffers;
const setMoreOffers = offersSlice.actions.addMoreOffers;
const reducer = offersSlice.reducer;

export { setOffersInSlice, setMoreOffers, reducer };
