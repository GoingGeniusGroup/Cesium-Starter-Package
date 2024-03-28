"use client";
import {
  Cartesian3,
  Ion,
  Viewer,
  Transforms,
  HeadingPitchRoll,
  JulianDate,
  ClockRange,
  Clock,
  ClockStep,
  ClockViewModel,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect } from "react";
import "./css/main.css";

const VehicleCesiumViewer = () => {
  useEffect(() => {
    const initializeCesiumViewer = async () => {
      Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZGUzY2FhOC00M2ViLTQ2ZmQtYWQ1Yy1kYzNhYzFhZmVkZjIiLCJpZCI6MjAwOTU1LCJpYXQiOjE3MTAyMjkxNDF9.09cBca1kjkwB2lSOjuJMFMjOUV1DWT75cHXqT3zGxIU";

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
        infoBox: false,
        selectionIndicator: false,
        shadows: true,
        shouldAnimate: true,
      });

      viewer.scene.globe.enableLighting = true;
      viewer.entities.removeAll();

      const position = Cartesian3.fromDegrees(85.28472, 27.688835, 0);
      const heading = (210 * Math.PI) / 180;
      const pitch = 0;
      const roll = 0;
      const hpr = new HeadingPitchRoll(heading, pitch, roll);
      const orientation = Transforms.headingPitchRollQuaternion(position, hpr);

      const url = "mclaren.glb";
      // const url = "honda_twister_300.glb";
      // const url = "carblack.glb";

      const entity = viewer.entities.add({
        name: url,
        position: position,
        orientation: orientation,
        model: {
          uri: url,
        },
      });
      viewer.trackedEntity = entity;
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

export default VehicleCesiumViewer;
