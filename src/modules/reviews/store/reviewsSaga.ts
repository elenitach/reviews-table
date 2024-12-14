import { call, put, takeLatest } from "redux-saga/effects";
import { getReviews } from "../api/methods";
import { fetchError, fetchSuccess } from "./reviewsSlice";
import { Review } from "../api/interfaces";

function* fetchReviews() {
  try {
    const reviews: Review[] = yield call(getReviews);
    yield put(fetchSuccess(reviews));
  } catch (e) {
    yield put(fetchError());
  }
}

function* reviewsSaga() {
  yield takeLatest("reviews/fetchReviews", fetchReviews);
}

export default reviewsSaga;
