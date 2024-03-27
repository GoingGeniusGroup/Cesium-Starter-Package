"use client";
import {
  Cartesian3,
  Ion,
  defined,
  ScreenSpaceEventHandler,
  Viewer,
  createOsmBuildingsAsync,
  PostProcessStage,
  Color,
  ScreenSpaceEventType,
  Cartesian2,
} from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";
import { useEffect } from "react";
import "./css/main.css";

const AvatarCesiumViewer = () => {
  useEffect(() => {
    const initializeCesiumViewer = async () => {
      Ion.defaultAccessToken =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkZGUzY2FhOC00M2ViLTQ2ZmQtYWQ1Yy1kYzNhYzFhZmVkZjIiLCJpZCI6MjAwOTU1LCJpYXQiOjE3MTAyMjkxNDF9.09cBca1kjkwB2lSOjuJMFMjOUV1DWT75cHXqT3zGxIU";

      const viewer = new Viewer("cesiumContainer", {
        shouldAnimate: true,
      });
      const scene = viewer.scene;

      const position = Cartesian3.fromDegrees(-123.0744619, 44.0503706);
      const url = "https://models.readyplayer.me/66038d9e2aa392635c277ea9.glb";
      const entity = (viewer.trackedEntity = viewer.entities.add({
        name: url,
        position: position,
        model: {
          uri: url,
        },
      }));

      // Shade selected model with highlight.
      const fragmentShaderSource = `uniform sampler2D colorTexture;
                      in vec2 v_textureCoordinates;
                      uniform vec4 highlight;
                      void main() {
                      vec4 color = texture(colorTexture, v_textureCoordinates);
                      if (czm_selected()) {
                      vec3 highlighted = highlight.a * highlight.rgb + (1.0 - highlight.a) * color.rgb;
                      out_FragColor = vec4(highlighted, 1.0);
                      } else { 
                      out_FragColor = color;
                      }
                      }
                      `;

      const stage = scene.postProcessStages.add(
        new PostProcessStage({
          fragmentShader: fragmentShaderSource,
          uniforms: {
            highlight: function () {
              return new Color(1.0, 0.0, 0.0, 0.5);
            },
          },
        })
      );
      stage.selected = [];

      const handler = new ScreenSpaceEventHandler(viewer.scene.canvas);
      handler.setInputAction(function (movement: { endPosition: Cartesian2 }) {
        const pickedObject = viewer.scene.pick(movement.endPosition);
        if (defined(pickedObject)) {
          stage.selected = [pickedObject.primitive];
        } else {
          stage.selected = [];
        }
      }, ScreenSpaceEventType.MOUSE_MOVE);
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

export default AvatarCesiumViewer;
