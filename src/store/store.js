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

import {reducer as userReducer} from "../features/user/userSlice"
import {reducer as requestsReducer} from "../features/requests/requestsSlice"
import {reducer as offersReducer} from "../features/offers/offersSlice"
import { reducer as tagsReducer } from "../features/tags/tagsSlice";
import { reducer as messageReducer } from "../features/messages/messageSlice";
import { reducer as acceptanceReducer } from "../features/acceptance/acceptanceSlice";

export const store = configureStore(
       {
              reducer: {
                     user: userReducer,
                     requests: requestsReducer,
                     offers: offersReducer,
                     tags: tagsReducer,
                     message: messageReducer,
                     acceptance: acceptanceReducer,
              },
       }
)