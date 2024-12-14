import { SortState } from "../store/interfaces";

export const createSort = (sort: SortState) => {
  return [sort.field, sort.type].join("_");
};
