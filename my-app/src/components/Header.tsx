import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ pr: 5 }}>
              붕어빵
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Button sx={{ pr: 3 }} color="inherit">
                가게등록하기
              </Button>
              <Button sx={{ pr: 3 }} color="inherit">
                여긴 아직 미정
              </Button>
              <Button sx={{ pr: 3 }} color="inherit">
                마이페이지
              </Button>
            </Box>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
