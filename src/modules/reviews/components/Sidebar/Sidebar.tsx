import { FC } from "react";
import React from "react";
import Box from "@mui/material/Box";
import { SortSelect } from "../SortSelect/SortSelect";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { FetchStatuses } from "../../store/interfaces";

export const Sidebar: FC = () => {
  const fetchStatus = useSelector(
    (state: RootState) => state.reviews.fetchStatus
  );

  return (
    <Box
      sx={{
        width: 280,
        ...(fetchStatus !== FetchStatuses.Success && { pointerEvents: "none" }),
      }}
    >
      <SortSelect />
    </Box>
  );
};
