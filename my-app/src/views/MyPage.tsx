import React from "react";
import TabUnstyled from "@mui/base/TabUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import Main from "./Main";
import MapPage from "./MapPage";

export default function MyPage() {
  return (
    <TabsUnstyled>
      <TabsListUnstyled>
        <TabUnstyled>d</TabUnstyled>
        <TabUnstyled>s</TabUnstyled>
      </TabsListUnstyled>
      <TabPanelUnstyled value={0}>
        <Main />
      </TabPanelUnstyled>
      <TabPanelUnstyled value={1}>
        <MapPage />
      </TabPanelUnstyled>
    </TabsUnstyled>
  );
}
