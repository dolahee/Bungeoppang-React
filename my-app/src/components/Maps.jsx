import React from "react";
import Map from "../Map";
import { useContext, useState } from "react";
import MapContext from "../Map/MapContext";

export default function Maps() {
  const { map } = useContext(MapContext);
  return (
    <Map>
      <div
        id="map"
        style={{ position: "relative", width: "100%", height: "100vh" }}
      ></div>
    </Map>
  );
}
