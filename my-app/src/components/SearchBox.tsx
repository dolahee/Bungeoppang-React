import { Box, Button, TextField } from "@mui/material";
import React from "react";
import Search from "./Search";

export default function SearchBox() {
  return (
    <Box
      sx={{
        width: 350,
        alignItems: "center",
        justifyContent: "center",
        p: 1,
        m: 10,
        position: "absolute",
        top: 30,
        right: 0,
        zIndex: 1,
        backgroundColor: "white",
        border: 1,
      }}
    >
      <Search />
    </Box>
  );
}
