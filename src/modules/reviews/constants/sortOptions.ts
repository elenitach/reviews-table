import { SortOption } from "../store/interfaces";

export const sortOptions: SortOption[] = [
  { value: "default", label: "По умолчанию" },
  { value: "date_asc", label: "По времени (сначала старые)" },
  { value: "date_desc", label: "По времени (сначала новые)" },
  { value: "rating_asc", label: "По рейтингу (сначала низкий)" },
  { value: "rating_desc", label: "По рейтингу (сначала высокий)" },
];
