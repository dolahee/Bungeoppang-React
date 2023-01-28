import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";

export default function Join() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <Box>
            <img src="./mainImg.png" style={{ width: "150px" }} />
            <Box sx={{ pt: 5 }}>
              <TextField
                id="outlined-basic"
                label="아이디"
                variant="outlined"
              />
            </Box>
            <Box sx={{ pt: 5 }}>
              <TextField
                id="outlined-basic"
                label="비밀번호"
                variant="outlined"
              />
            </Box>
            <Box sx={{ pt: 5 }}>
              <TextField
                id="outlined-basic"
                label="닉네임"
                variant="outlined"
              />
            </Box>
            <Box sx={{ pt: 5 }}>
              <Button variant="contained">가입하기</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
