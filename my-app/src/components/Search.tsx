import { Box, Button, TextField } from "@mui/material";
import React from "react";

export default function Search() {
  return (
    <div>
      {" "}
      <Box display="flex" alignItems="center">
        <Box>
          <TextField fullWidth label="지역명, 지하철역 검색" size="small" />
        </Box>
        <Box>
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              alert("clicked");
            }}
          >
            검색하기
          </Button>
        </Box>
      </Box>
    </div>
  );
}
