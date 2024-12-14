import { FC } from "react";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { filter } from "../../store/reviewsSlice";
import { FilterFields, FilterTypes } from "../../store/interfaces";

export const FilterPlatformSelect: FC = () => {
  const dispatch = useDispatch();
  const initialData = useSelector(
    (state: RootState) => state.reviews.initialReviews
  );
  const filters = useSelector((state: RootState) => state.reviews.filters);
  const values = filters.platform?.value ?? [];
  const options = Array.from(
    new Set(initialData.map((item) => item.platform))
  ).map((item) => ({ label: item, value: item }));
  return (
    <FormControl fullWidth>
      <InputLabel id="platform">Платформа</InputLabel>
      <Select
        labelId="platform"
        multiple
        value={values}
        onChange={(event) => {
          const value = event.target.value;
          dispatch(
            filter({
              field: FilterFields.Platform,
              value: typeof value === "string" ? value.split(",") : value,
              type: FilterTypes.Array,
            })
          );
        }}
        label="Платформа"
        renderValue={(selected) => selected.join(", ")}
      >
        {options.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            <Checkbox checked={values.includes(item.value)} />
            <ListItemText primary={item.value} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
