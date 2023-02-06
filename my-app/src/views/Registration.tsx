import { Box, Button, Input, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Header from "../components/Header";
import Map from "../components/Map";
import axios from "axios";

const ariaLabel = { "aria-label": "description" };

export default function Registration() {
  return (
    <>
      <Header />
      <Box
        sx={{
          pt: 15,
          display: "flex",
          height: "600px",
          justifyContent: "center",
        }}
      >
        <Box sx={{ border: 1, width: "700px" }}>
          {/* 그 안에 지도*/}
          <Box>
            <img
              src="./mapMarker.png"
              style={{
                position: "absolute",
                zIndex: 1,
                width: "40px",
                bottom: "58%",
                right: "50%",
              }}
            />
          </Box>

          <Map />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
        }}
      >
        <Container
          sx={{
            width: "500px",
            display: "block",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Paper elevation={0} variant="outlined">
            <Box sx={{ width: "100px" }}>
              <Paper elevation={0} variant="outlined">
                가게 주소
              </Paper>
            </Box>
          </Paper>
          <Paper elevation={0} variant="outlined">
            <Box sx={{ width: "100px" }}>
              <Paper elevation={0} variant="outlined">
                가게 이름
              </Paper>
            </Box>
          </Paper>
          <Typography variant="h5">메뉴 등록</Typography>
          <Paper elevation={0} variant="outlined">
            <Box sx={{ width: "100px" }}>
              <Paper elevation={0} variant="outlined">
                팔
              </Paper>
            </Box>
          </Paper>
          <Paper elevation={0} variant="outlined">
            <Box sx={{ width: "100px" }}>
              <Paper elevation={0} variant="outlined">
                슈크림
              </Paper>
            </Box>
          </Paper>
          <Paper elevation={0} variant="outlined">
            <Box sx={{ width: "100px" }}>
              <Paper elevation={0} variant="outlined">
                운영 요일
              </Paper>
            </Box>
          </Paper>
          <Button variant="contained">가게 등록하기</Button>
        </Container>
      </Box>
    </>
  );
}
