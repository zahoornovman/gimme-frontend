//libraries
/*
import { createStore } from "@reduxjs/toolkit"

const initialState = {
      
}

const reducerFunction = (state = initialState, action) => {

       //Base case
       // else{
       return state
       //  }


}

const store = createStore(reducerFunction, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store
*/
import { configureStore } from "@reduxjs/toolkit";

import {reducer as userReducer} from "../slices/user/userSlice"
import {reducer as requestsReducer} from "../slices/requests/requestsSlice"
import {reducer as offersReducer} from "../slices/offers/offersSlice"
import { reducer as tagsReducer } from "../slices/tags/tagsSlice";
import { reducer as messageReducer } from "../slices/messages/messageSlice";
import { reducer as acceptanceReducer } from "../slices/acceptance/acceptanceSlice";
import { reducer as lastPageBeforeInReducer } from "../slices/lastPageSignUpBeforeSignIn/lastPageSignUpBeforeSignInSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    requests: requestsReducer,
    offers: offersReducer,
    tags: tagsReducer,
    message: messageReducer,
    acceptance: acceptanceReducer,
    lastPageBeforeSignIn: lastPageBeforeInReducer,
  },
});
