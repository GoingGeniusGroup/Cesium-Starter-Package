"use client";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    subject: "Math",
    A: 80,
    B: 40,
  },
  {
    subject: "Chinese",
    A: 55,
    B: 62,
  },
  {
    subject: "English",
    A: 86,
    B: 50,
  },
  {
    subject: "Geography",
    A: 66,
    B: 75,
  },
  {
    subject: "Physics",
    A: 85,
    B: 90,
  },
  {
    subject: "History",
    A: 45,
    B: 65,
  },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active: boolean;
  payload: any[];
  label: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
        <p className="text-medium text-lg">{label}</p>
        <p className="text-sm text-blue-400">
          Student A:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-indigo-400">
          Student B:
          <span className="ml-2">${payload[1].value}</span>
        </p>
      </div>
    );
  }
};

export default function RadarChartPage() {
  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <ResponsiveContainer width={600} height={450}>
            <RadarChart
              // cx={300}
              // cy={250}
              outerRadius={180}
              data={data}
            >
              <PolarGrid radialLines={true} gridType="polygon" />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis domain={[0, 100]} opacity={0} />
              <Radar
                name="Student A"
                dataKey="A"
                stroke="#28B5E1"
                strokeWidth={3}
                fill="#28B5E1"
                fillOpacity={0.4}
              />
              <Radar
                name="Student B"
                dataKey="B"
                stroke="#5A3FFF"
                strokeWidth={3}
                fill="#D94DDC"
                fillOpacity={0.3}
              />
              {/* <Tooltip /> */}
              <Tooltip
                content={<CustomTooltip active={true} payload={[]} label="" />}
              />
              {/* <Legend /> */}
              <Legend
                width={150}
                wrapperStyle={{
                  bottom: 0,
                  right: -20,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  // border: "1px solid #000FDC",
                  borderRadius: 4,
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
