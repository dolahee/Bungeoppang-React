import Box from "@mui/material/Box";
import React from "react";
import Sidebar from "../components/Sidebar";

interface Props {
  open: Boolean;
  onClose: () => void;
}

export default function StoreData({ open, onClose }: Props) {
  if (open === false) {
    return null;
  }

  return (
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 60,
        right: 0,
        backgroundColor: "white",
      }}
    >
      <div>
        <h1 onClick={onClose}> ◀ </h1>
        <img src="./mainImg.png" style={{ width: "100%" }} />
        <div>
          <h1>붕어네</h1>
          <h2>주소:</h2>
          <h2>메뉴:</h2>
          <h2>운영시간:</h2>
          <h2>별점:</h2>
          <button>별점 남기기</button>
          <button>가게 수정하기</button>
        </div>
      </div>
    </Box>
  );
}
