import { Review } from "../api/interfaces";
import { SortTypes } from "../store/interfaces";
import { parseSort } from "./parseSort";

export const getSortedReviews = (code: string | null, reviews: Review[]) => {
  const sort = parseSort(code);
  const newReviews = reviews.slice();
  if (!sort) {
    newReviews.sort((a, b) => a.id - b.id);
  } else {
    newReviews.sort((a, b) => {
      if (sort.type === SortTypes.Asc) {
        return a[sort.field] < b[sort.field]
          ? -1
          : a[sort.field] === b[sort.field]
          ? 0
          : 1;
      }
      return b[sort.field] < a[sort.field]
        ? -1
        : a[sort.field] === b[sort.field]
        ? 0
        : 1;
    });
  }
  return newReviews;
};
