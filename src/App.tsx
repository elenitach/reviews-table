import React, { useEffect } from "react";
import "./App.css";
import { Sidebar } from "./modules/reviews/components/Sidebar/Sidebar";
import { ReviewsTable } from "./modules/reviews/components/ReviewsTable/ReviewsTable";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { fetchReviews } from "./modules/reviews/store/reviewsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  return (
    <Box component="main" p={4}>
      <Typography component="h1" variant="h5" mb={3}>
        Отзывы о нас
      </Typography>
      <Box sx={{ display: "flex", gap: 6 }}>
        <Sidebar />
        <ReviewsTable />
      </Box>
    </Box>
  );
}

export default App;
