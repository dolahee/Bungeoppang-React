import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import Store from "../views/Store";
import StoreData from "../components/StoreData";

const drawerWidth = 400;

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const StoerData = () => {
    setOpen(true);
  };
  return (
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
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="현재 지역의 붕어빵은 {} 개 입니다." />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem disablePadding onClick={StoerData}>
            <ListItemButton>
              <Store />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <StoreData
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </Drawer>
  );
}
