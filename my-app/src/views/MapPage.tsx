import React from "react";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Map from "../components/Map";

const drawerWidth = 300;

export default function MapPage() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {["현재 지역의 붕어빵은 {} 개 입니다."].map((text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["붕어빵", "붕어빵", "붕어빵"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
        <Map />
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
        </Box> */}
      </Box>
    </>
  );
}
