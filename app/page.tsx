import ClockCesiumViewer from "./component/clockcesium/page";
import CesiumViewer from "./component/widgetcesium/page";
import AvatarCesiumViewer from "./component/avatarcesium/page";

import RadarChartPage from "./component/radarchart/page";
import TestDiv from "./component/testdiv/page";

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
          {/* <RadarChartPage /> */}
          {/* <AvatarCesiumViewer /> */}
          <ClockCesiumViewer />
        </div>

        {/* TestDiv components on four corners */}
        <div className="absolute flex justify-start p-6 w-1/2 h-1/2 z-10 pointer-events-none">
          <TestDiv />
        </div>
        <div className="absolute flex justify-end top-0 right-0 p-6 w-1/2 h-1/2 z-10 pointer-events-none">
          <TestDiv />
        </div>
        {/* <div className="absolute flex justify-start bottom-0 left-0 pl-6 pb-32 w-1/4 h-1/2 z-10 pointer-eventss">
          <TestDiv />
        </div> */}
        <div className="absolute flex justify-end bottom-0 right-0 pr-6 pb-10 w-1/4 h-1/2 z-10 pointer-events">
          <TestDiv />
        </div>
      </div>
    </>
  );
};

export default Page;
