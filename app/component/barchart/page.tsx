"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Person A",
    project_A: 40,
    project_B: 24,
  },
  {
    name: "Person B",
    project_A: 30,
    project_B: 43,
  },
  {
    name: "Person C",
    project_A: 20,
    project_B: 80,
  },
  {
    name: "Person D",
    project_A: 27,
    project_B: 39,
  },
  {
    name: "Person E",
    project_A: 18,
    project_B: 48,
  },
  {
    name: "Person F",
    project_A: 23,
    project_B: 38,
  },
  {
    name: "Person G",
    project_A: 34,
    project_B: 43,
  },
];

export default function BarChartPage() {
  return (
    <>
      <div className="flex min-h-48 flex-col items-center justify-center px-4 md:px-8 xl:px-10">
        <p>Data of Project A and B</p>
        <div className=" bg-black rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-slate-800 flex justify-center p-11 hover:bg-opacity-25 shadow-xl shadow-blue-700 hover:shadow-blue-500">
          <ResponsiveContainer width={800} height={600}>
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="6 6" />
              <XAxis dataKey="name" padding={{ left: 20, right: 20 }} />
              <YAxis domain={[0, 100]} />
              <Tooltip
                content={<CustomTooltip active={false} payload={[]} label="" />}
              />
              {/* <Legend /> */}
              <Legend
                width={200}
                wrapperStyle={{
                  top: -40,
                  right: -40,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: 3,
                }}
              />

              <Bar dataKey="project_A" fill="#8b5cf6" />
              <Bar dataKey="project_B" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

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
          PA
          <span className="ml-2">{payload[0].value}%</span>
        </p>
        <p className="text-sm text-indigo-400">
          PB
          <span className="ml-2">{payload[1].value}%</span>
        </p>
      </div>
    );
  }
};
