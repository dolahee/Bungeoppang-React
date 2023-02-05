import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const MapPage = () => {
    navigate(`/MapPage`);
  };
  const Registration = () => {
    navigate(`/Registration`);
  };
  const MyPage = () => {
    navigate(`/MyPage`);
  };
  const Main = () => {
    navigate(`/Main`);
  };
  const Login = () => {
    navigate(`/Login`);
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
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
            <Typography
              variant="h6"
              component="div"
              sx={{ pr: 5 }}
              onClick={Main}
            >
              붕어빵
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Button onClick={MapPage} sx={{ pr: 3 }} color="inherit">
                지도
              </Button>
              <Button onClick={Registration} sx={{ pr: 3 }} color="inherit">
                가게등록하기
              </Button>
              <Button onClick={MyPage} sx={{ pr: 3 }} color="inherit">
                마이페이지
              </Button>
            </Box>
            <Button color="inherit" onClick={Login}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
