import ClockCesiumViewer from "./component/clockcesium/page";
import CesiumViewer from "./component/widgetcesium/page";

import RadarChartPage from "./component/radarchart/page";
import TestDiv from "./component/testdiv/page";

const Page = () => {
  return (
    <div>
      {/* <ClockCesiumViewer /> */}
      <CesiumViewer />
      {/* <RadarChartPage /> */}
      <div>
        <TestDiv />
      </div>
    </div>
  );
};

export default Page;
