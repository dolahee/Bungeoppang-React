import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function Introduction() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        backgroundImage: `url("../searchimg.png")`,
        backgroundSize: "300px 400px ",
        backgroundRepeat: "no-repeat",
        height: "400px",
        backgroundPosition: "40%  ",
        paddingLeft: "400px",
      }}
    >
      <Box sx={{}}>
        <Typography variant="h5" component="div" p={4}>
          핸드폰으로도 쉽게 찾을 수 있습니다.
        </Typography>
        <Button variant="contained">모바일 버전 바로가기</Button>
      </Box>
    </Box>
  );
}
