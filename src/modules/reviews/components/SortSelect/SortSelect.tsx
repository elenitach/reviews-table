import { FC } from "react";
import Select from '@mui/material/Select'
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { sort } from "../../store/reviewsSlice";
import { sortOptions } from "../../constants/sortOptions";

export const SortSelect: FC = () => {
    const sortValue = useSelector((state: RootState) => state.reviews.sort)
    const dispatch = useDispatch()

    return (
      <FormControl fullWidth>
        <InputLabel id="sort-select">Сортировка</InputLabel>
        <Select
          labelId="sort-select"
          value={sortValue}
          label="Сортировка"
          onChange={(event) => dispatch(sort(event.target.value))}
          defaultValue="default"
        >
          {sortOptions.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
}