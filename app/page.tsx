import ClockCesiumViewer from "./component/cesium/clockcesium/page";
import CesiumViewer from "./component/cesium/widgetcesium/page";

import BarChartPage from "./component/charts/barchart/page";
import TestDiv from "./component/charts/testdiv/page";
import Navbar from "./component/navbar/page";

import VehicleCesiumViewer from "./component/avatar/vehiclecesium/page";
import AircraftCesiumViewer from "./component/avatar/aircraftcesium/page";
import HumanModalCesiumViewer from "./component/avatar/humanmodal/page";

const Page = () => {
  return (
    <>
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        {/* CesiumViewer as background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {/* <CesiumViewer /> */}
          {/* <ClockCesiumViewer /> */}

          {/* <RadarChartPage /> */}

          {/* <HumanModalCesiumViewer /> */}
          {/* <VehicleCesiumViewer /> */}
          <AircraftCesiumViewer />
        </div>

        {/* <Navbar /> */}
        {/* TestDiv components on four corners */}
        <div className="absolute flex justify-start p-6 w-1/2 h-1/2 z-10 pointer-events-none">
          <TestDiv />
        </div>
        {/* <div className="absolute flex justify-start p-6 w-1/2 h-1/2 z-10 pointer-events-none">
          <BarChartPage />
        </div> */}
        <div className="absolute flex justify-end top-0 right-0 p-6 w-1/2 h-1/2 z-10 pointer-events-none">
          <TestDiv />
        </div>
        <div className="absolute flex justify-end bottom-0 right-0 pr-6 pb-10 w-1/4 h-1/2 z-10 pointer-events">
          <TestDiv />
        </div>
      </div>
    </>
  );
};

export default Page;
