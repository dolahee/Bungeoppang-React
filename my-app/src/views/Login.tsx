import { Box, Button, Container, Paper, Typography } from "@mui/material";
import React from "react";

export default function Login() {
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
        <Paper variant="outlined" elevation={3} sx={{ p: 5 }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Box>
              <img src="./mainImg.png" style={{ width: "200px" }} />
              <Typography variant="h6" sx={{ pt: 5 }}>
                간편하게 로그인하고
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: "bold", pb: 5 }}>
                다양한 서비스를 이용하세요.
              </Typography>
              <Box sx={{ pb: 1 }}>
                <Button variant="contained">카카오톡으로 시작하기</Button>
              </Box>
              <Box sx={{ pb: 1 }}>
                <Button variant="contained">붕어빵으로 시작하기</Button>
              </Box>
              <Box>
                <Button variant="contained">회원가입</Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
