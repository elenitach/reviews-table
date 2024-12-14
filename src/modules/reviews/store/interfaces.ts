export enum SortFields {
  Date = "date",
  Rating = "rating",
}

export enum FilterFields {
  Platform = "platform",
  Rating = "rating",
}

export enum SortTypes {
    Asc = 'asc',
    Desc = 'desc',
}

export interface SortState {
  field: SortFields;
  type: SortTypes;
}

export type FilterValues = Array<number | string> | [number, number];

export interface FilterState {
  field: FilterFields;
  value: FilterValues;
}

export interface SortOption {
    value: string,
    label: string
}

export enum FetchStatuses {
  Pending = 'pending',
  Success = 'success',
  Error = 'error'
}