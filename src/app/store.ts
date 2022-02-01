import { configureStore, getDefaultMiddleware, Store } from "@reduxjs/toolkit"; 
import counterReducer from '../features/counter/counterSlice';
import { apiSlice } from "../features/dogs/dogs-api-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    //add the generated reducer as a specific top-level slice
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  //adding the api middleware enables caching, invalidation, polling
  // and other useful features of rtk-query
    middleware: (getDefaultMiddleware) => {
     return getDefaultMiddleware().concat(apiSlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


