import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "en-US",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, { payload }) => {
      console.log("Entering Locale Slice");
      state.language = payload;
      console.log(payload);
    },
  },
});

const setLanguageInSlice = languageSlice.actions.setLanguage;

const reducer = languageSlice.reducer;

export { setLanguageInSlice, reducer };
