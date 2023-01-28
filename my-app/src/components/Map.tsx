import React, { useState, useEffect, useRef } from "react";
import "ol/ol.css";
import { Map as OlMap, View } from "ol";
import { defaults as defaultControls, FullScreen } from "ol/control";
import { fromLonLat, get as getProjection } from "ol/proj";
import { Tile as TileLayer } from "ol/layer";
import { XYZ } from "ol/source";
import {
  DragRotateAndZoom,
  defaults as defaultInteractions,
} from "ol/interaction";

interface Props {
  children?: React.ReactNode;
}

const Map = ({ children }: Props) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projection = getProjection("EPSG:3857");
    if (!projection) return;
    const map = new OlMap({
      controls: defaultControls({ zoom: false, rotate: false }).extend([
        new FullScreen(),
      ]),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
      layers: [
        new TileLayer({
          source: new XYZ({
            crossOrigin: "anonymous",
            url: "http://mt0.google.com/vt/lyrs=m&h1=ko&x={x}&y={y}&z={z}",
          }),
        }),
      ],
      target: mapRef.current as HTMLDivElement,
      view: new View({
        projection,
        center: fromLonLat([126.9779228388393, 37.56643948208262], projection),
        zoom: 15,
      }),
    });
    return () => map.setTarget(undefined);
  }, []);

  return (
    <div ref={mapRef} style={{ width: "100%", height: "100%" }}>
      {children}
    </div>
  );
};

export default Map;
