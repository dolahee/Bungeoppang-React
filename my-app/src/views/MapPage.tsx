import React from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import SearchBox from "../components/SearchBox";

export default function MapPage() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* 화면 왼쪽 분할 */}
        <Sidebar />
        {/* 화면 오른쪽 분할 */}
        <Box width="100%">
          {/* 그 안에 지도*/}
          <Map />
          <SearchBox />
        </Box>
      </Box>
    </>
  );
}
