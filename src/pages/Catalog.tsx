import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useDispatch, useSelector } from "react-redux";
import { getCatalog } from "../redux/modules/catalog/reducer";
function Catalog() {
  useEffect(() => {
    dispatch(getCatalog());
  }, []);
  const dispatch = useDispatch();
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper>131231</Paper>
      </Box>
    </Container>
  );
}

export default Catalog;
