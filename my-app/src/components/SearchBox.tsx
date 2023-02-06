import { Box, Button, TextField } from "@mui/material";
import { Map } from "ol";
import React from "react";
import Search from "./Search";

interface Props {
  map?: Map;
}

export default function SearchBox({ map }: Props) {
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
      <Search map={map} />
    </Box>
  );
}
