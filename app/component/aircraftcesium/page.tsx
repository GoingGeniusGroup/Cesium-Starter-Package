"use client";
import { Cartesian3, Ion, Viewer, createOsmBuildingsAsync } from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect } from "react";
import "./css/main.css";

const AircraftCesiumViewer = () => {
  useEffect(() => {
    const initializeCesiumViewer = async () => {
      Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZGUzY2FhOC00M2ViLTQ2ZmQtYWQ1Yy1kYzNhYzFhZmVkZjIiLCJpZCI6MjAwOTU1LCJpYXQiOjE3MTAyMjkxNDF9.09cBca1kjkwB2lSOjuJMFMjOUV1DWT75cHXqT3zGxIU";

      const viewer = new Viewer("cesiumContainer", {
        infoBox: false,
        selectionIndicator: false,
        shadows: true,
        shouldAnimate: true,
      });
      const scene = viewer.scene;
      scene.globe.depthTestAgainstTerrain = true;

      if (!scene.sampleHeightSupported) {
        window.alert("This browser does not support sampleHeight.");
      }

      const height = 1000;

      const position = Cartesian3.fromDegrees(85.28472, 27.688835, height);
      const url = "aircraft.glb";
      const entity = (viewer.trackedEntity = viewer.entities.add({
        name: url,
        position: position,
        model: {
          uri: url,
        },
      }));
    };

    initializeCesiumViewer();

    // Cleanup function (optional)
    return () => {
      // Any cleanup code if needed
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div id="cesiumContainer" style={{ width: "100%", height: "100vh" }}>
      {/* Cesium Viewer container */}
    </div>
  );
};

export default AircraftCesiumViewer;
