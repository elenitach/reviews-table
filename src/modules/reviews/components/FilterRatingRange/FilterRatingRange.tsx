import { FC } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { filter } from "../../store/reviewsSlice";
import { FilterFields, FilterTypes } from "../../store/interfaces";

export const FilterRatingRange: FC = () => {
  const dispatch = useDispatch();
  const initialData = useSelector(
    (state: RootState) => state.reviews.initialReviews
  );
  const filters = useSelector((state: RootState) => state.reviews.filters);
  const ratings = initialData.map((item) => item.rating);
  const min = Math.min(...ratings);
  const max = Math.max(...ratings);
  const value = (filters.rating?.value as number[]) ?? [min, max];

  const marks = Array.from(
    { length: max - min + 1 },
    (_, index) => min + index
  ).map((item) => ({ value: item, label: item }));

  return (
    <Box>
      <Typography>Рейтинг</Typography>
      <Slider
        value={value}
        onChange={(_, newValue) => {
          dispatch(
            filter({
              field: FilterFields.Rating,
              type: FilterTypes.Range,
              value: newValue as number[],
            })
          );
        }}
        valueLabelDisplay="off"
        min={min}
        max={max}
        marks={marks}
      />
    </Box>
  );
};
