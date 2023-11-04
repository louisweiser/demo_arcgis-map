import React, { useRef, useEffect } from "react";
import { Map, MapView, Search } from "@arcgis/core";
import "@arcgis/core/assets/esri/themes/light/main.css";

const ArcGISMap = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const map = new Map({
        basemap: "topo-vector",
      });

      const view = new MapView({
        container: mapDiv.current,
        map: map,
        center: [13.404954, 52.520008],
        zoom: 10,
      });

      const search = new Search({
        view: view,
      });

      view.ui.add(search, "top-right");

      return () => {
        if (view) {
          view.container = null;
        }
      };
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv} style={{ height: "500px" }} />;
};

export default ArcGISMap;
