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
import {reducer as likesReducer} from "../features/likes/likesSlice"
import {reducer as offersReducer} from "../features/offers/offersSlice"

export const store = configureStore(
       {
              reducer: {
                     user: userReducer,
                     likes: likesReducer,
                     offers: offersReducer,
              },
       }
)