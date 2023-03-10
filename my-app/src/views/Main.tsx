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
              <Box sx={{ backgroundColor: "white" }}>
                <Search searchBox={700} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Introduction />
      <Footer />
    </>
  );
}
