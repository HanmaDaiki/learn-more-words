import { configureStore } from '@reduxjs/toolkit';

import { wordsSliceReducer } from "./wordsSlice.ts";

const rootReducer = {
  reducer: {
    words: wordsSliceReducer,
  }
};

const store = configureStore(rootReducer);

const AppDispatch = store.dispatch;

export { store, AppDispatch };