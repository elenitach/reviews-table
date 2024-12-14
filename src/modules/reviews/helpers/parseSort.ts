import { SortFields, SortState } from "../store/interfaces";

export const parseSort = (code: string | null) => {
  if (!code) return null;
  
  const [field, type] = code.split("_");
  if (
    !Object.values(SortFields).includes(field as SortFields) ||
    code === "default"
  ) {
    return null;
  }

  return {
    field,
    type,
  } as SortState;
};
