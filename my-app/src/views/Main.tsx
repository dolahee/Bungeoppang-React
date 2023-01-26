import { Box, Button, Modal, TextField } from "@mui/material";
import React from "react";
import Header from "../components/Header";

export default function Main() {
  return (
    <>
      <Header />
      <section>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
            p: 3,
          }}
        >
          <Box display="flex">
            <TextField
              fullWidth
              label="찾고 싶은 붕어빵의 지역명, 지하철역을 입력해 주세요"
              id="fullWidth"
            />
            <Button
              variant="contained"
              onClick={() => {
                alert("clicked");
              }}
            >
              검색하기
            </Button>
          </Box>
        </Box>
      </section>
    </>
  );
}
