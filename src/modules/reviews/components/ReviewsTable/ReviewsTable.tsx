import { FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../store";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CircularProgress from "@mui/material/CircularProgress";
import { FetchStatuses } from "../../store/interfaces";
import React from "react";
import { format } from "date-fns";
import Typography from "@mui/material/Typography";

export const ReviewsTable: FC = () => {
  const data = useSelector((state: RootState) => state.reviews.reviews);
  const fetchStatus = useSelector(
    (state: RootState) => state.reviews.fetchStatus
  );

  if (fetchStatus === FetchStatuses.Pending) return <CircularProgress />;

  if (fetchStatus === FetchStatuses.Error)
    return (
      <Typography variant="body1">
        Ошибка загрузки отзывов, повторите попытку
      </Typography>
    );

  return (
    <Table sx={{ width: "auto" }}>
      <TableHead>
        <TableRow>
          <TableCell>Платформа</TableCell>
          <TableCell>Рейтинг</TableCell>
          <TableCell>Время</TableCell>
          <TableCell>Отзыв</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.platform}</TableCell>
            <TableCell>{row.rating}</TableCell>
            <TableCell>{format(row.date, "dd.MM.yyyy, hh:mm")}</TableCell>
            <TableCell>{row.text}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
