import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { url } from "inspector";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Search from "../components/Search";

export default function Main() {
  return (
    <>
      <Header />
      <Box
        sx={{
          maxWidth: "100%",
          height: "500px",
          p: 3,
          backgroundImage: `url("../330201637301427256.jpg")`,
          backgroundSize: "2000px 700px ",
        }}
      >
        <Box
          sx={{
            display: "block",
            alignItems: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <Box pt={30}>
            <Typography variant="h3" component="div" p={4}>
              어디 붕어빵을 찾고 계세요?
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box sx={{ width: 500, backgroundColor: "white" }}>
                <TextField
                  fullWidth
                  label="찾고 싶은 붕어빵의 지역명, 지하철역을 입력해 주세요"
                  id="fullWidth"
                />
              </Box>
              <Button
                variant="contained"
                onClick={() => {
                  alert("clicked");
                }}
              >
                붕어빵 가게 검색하기
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Introduction />
      <Footer />
    </>
  );
}
