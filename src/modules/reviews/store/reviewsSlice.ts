import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Review } from "../api/interfaces";
import {
  FetchStatuses,
  FilterFields,
  FilterState,
  FilterTypes,
} from "./interfaces";
import { getSortedReviews } from "../helpers/getSortedReviews";

export interface RewiewsState {
  initialReviews: Review[];
  reviews: Review[];
  sort: string | null;
  filters: Record<string, FilterState>;
  fetchStatus: FetchStatuses | null;
}

const initialState: RewiewsState = {
  initialReviews: [],
  reviews: [],
  sort: null,
  filters: {},
  fetchStatus: null,
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    fetchReviews: (state) => {
      state.fetchStatus = FetchStatuses.Pending;
    },
    fetchSuccess: (state, { payload }: PayloadAction<Review[]>) => {
      state.fetchStatus = FetchStatuses.Success;
      state.initialReviews = payload;
      state.reviews = payload;
    },
    fetchError: (state) => {
      state.fetchStatus = FetchStatuses.Error;
    },
    sort: (state, { payload }: PayloadAction<string | null>) => {
      state.sort = payload;
      state.reviews = getSortedReviews(payload, state.reviews);
    },
    filter: (state, { payload }: PayloadAction<FilterState>) => {
      if (payload.value.length === 0) {
        delete state.filters[payload.field];
      } else {
        state.filters[payload.field] = payload;
      }
      state.reviews = state.initialReviews;

      for (const [field, filterState] of Object.entries(state.filters)) {
        state.reviews = state.reviews.filter((item) => {
          if (filterState.type === FilterTypes.Array) {
            return filterState.value.includes(item[field as FilterFields]);
          }
          if (filterState.type === FilterTypes.Range) {
            return (
              item[field as FilterFields] >= filterState.value[0] &&
              item[field as FilterFields] <= filterState.value[1]
            );
          }
          return true;
        });
      }

      state.reviews = getSortedReviews(state.sort, state.reviews);
    },
  },
});

export const { sort, filter, fetchReviews, fetchError, fetchSuccess } =
  reviewsSlice.actions;

export default reviewsSlice.reducer;
