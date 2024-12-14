import { FC } from "react";
import React from "react";
import Stack from "@mui/material/Stack";
import { SortSelect } from "../SortSelect/SortSelect";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { FetchStatuses } from "../../store/interfaces";
import { FilterPlatformSelect } from "../FilterPlatformSelect/FilterPlatformSelect";
import { FilterRatingRange } from "../FilterRatingRange/FilterRatingRange";

export const Sidebar: FC = () => {
  const fetchStatus = useSelector(
    (state: RootState) => state.reviews.fetchStatus
  );

  return (
    <Stack
      pt={2}
      gap={2}
      sx={{
        width: 280,
        ...(fetchStatus !== FetchStatuses.Success && { pointerEvents: "none" }),
      }}
    >
      <SortSelect />
      <FilterPlatformSelect />
      <FilterRatingRange />
    </Stack>
  );
};
