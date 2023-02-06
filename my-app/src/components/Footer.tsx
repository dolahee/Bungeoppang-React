import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "bolck",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundColor: "#D5D5D5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          p: 0,
        }}
      >
        <Typography variant="h6" component="div" p={2}>
          Copyright © ParkDohee. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
}
