"use client";
import {
  Cartesian3,
  Clock,
  ClockRange,
  ClockStep,
  ClockViewModel,
  Ion,
  JulianDate,
  Math,
  Terrain,
  Viewer,
  createOsmBuildingsAsync,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect } from "react";
import "./css/main.css";

const ClockCesiumViewer = () => {
  useEffect(() => {
    const initializeCesiumViewer = async () => {
      // CesiumJS has a default access token built in but it's not meant for active use.
      // Please set your own access token can be found at: https://cesium.com/ion/tokens.
      // Ion.defaultAccessToken = "YOUR TOKEN HERE";

      Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZGUzY2FhOC00M2ViLTQ2ZmQtYWQ1Yy1kYzNhYzFhZmVkZjIiLCJpZCI6MjAwOTU1LCJpYXQiOjE3MTAyMjkxNDF9.09cBca1kjkwB2lSOjuJMFMjOUV1DWT75cHXqT3zGxIU";
      // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
      // const viewer = new Viewer("cesiumContainer", {
      //   terrain: Terrain.fromWorldTerrain(),
      // });

      // // Add Cesium OSM Buildings, a global 3D buildings layer.
      // const osmBuildingsTileset = await createOsmBuildingsAsync();
      // viewer.scene.primitives.add(osmBuildingsTileset);

      // Fly the camera to San Francisco at the given longitude, latitude, and height.
      // viewer.camera.flyTo({
      //   destination: Cartesian3.fromDegrees(85.32, 27.7, 2400),
      //   orientation: {
      //     heading: Math.toRadians(0.0),
      //     pitch: Math.toRadians(-15.0),
      //   },
      // });

      const clock = new Clock({
        startTime: JulianDate.fromIso8601("2013-12-25"),
        currentTime: JulianDate.fromIso8601("2013-12-25"),
        stopTime: JulianDate.fromIso8601("2013-12-26"),
        clockRange: ClockRange.LOOP_STOP, // loop when we hit the end time
        clockStep: ClockStep.SYSTEM_CLOCK_MULTIPLIER,
        multiplier: 4000, // how much time to advance each tick
        shouldAnimate: true, // Animation on by default
      });

      const viewer = new Viewer("cesiumContainer", {
        clockViewModel: new ClockViewModel(clock),
      });

      viewer.scene.globe.enableLighting = true;
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

export default ClockCesiumViewer;