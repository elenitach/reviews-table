import { configureStore } from "@reduxjs/toolkit";
import reviewsReducer from '../modules/reviews/store/reviewsSlice'
import createSagaMiddleware from "redux-saga";
import reviewsSaga from "../modules/reviews/store/reviewsSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(reviewsSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
