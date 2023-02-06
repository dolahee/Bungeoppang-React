import React, { useState, useCallback } from "react";
import { Map as OlMap } from "ol";
import Header from "../components/Header";
import Box from "@mui/material/Box";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import SearchBox from "../components/SearchBox";
import axios from "axios";
import { transform } from "ol/proj";

const DST = "EPSG:900913";
const SRC = "EPSG:4326";

export default function MapPage() {
  const [map, setMap] = useState<OlMap>();

  // const getStoreList = async () => {
  //   const view = map?.getView();
  //   if (view && map) {
  //     const [x1, y1, x2, y2] = view.calculateExtent(map.getSize());
  //     const southWest = transform([x1, y1], DST, SRC);
  //     const northEast = transform([x2, y2], DST, SRC);
  //     const response = await axios({
  //       method: "POST",
  //       url: "/storeList",
  //       data: {
  //         southWest: { lon: southWest[0], lat: southWest[1] },
  //         northEast: { lon: northEast[0], lat: northEast[1] },
  //       },
  //     });
  //     console.log(response.data);
  //     return response.data;
  //   }
  // };

  const onMapLoaded = useCallback((newMap?: OlMap) => {
    setMap(newMap);
  }, []);

  return (
    <>
      <Header />
      <Box sx={{ display: "flex", height: "100vh" }}>
        {/* 화면 왼쪽 분할 */}
        <Sidebar />
        {/* 화면 오른쪽 분할 */}
        <Box width="100%">
          {/* 그 안에 지도*/}
          <Map onLoaded={onMapLoaded} />
          <SearchBox map={map} />
        </Box>
      </Box>
    </>
  );
}
