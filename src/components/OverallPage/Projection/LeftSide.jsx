import React from "react";
import Project from "./Project";
import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
} from "recharts";

const chartData = [
  {
    name: "Nov",
    areaV: 1111,
    lineV: 1234,
    yAxis: 0,
  },
  {
    name: "Dec",
    areaV: 999,
    lineV: 1111,
    yAxis: 500,
  },
  {
    name: "Jan",
    areaV: 888,
    lineV: 999,
    yAxis: 1000,
  },
  {
    name: "Feb",
    areaV: 1030,
    areaDashV: 1030,
    lineV: 1222,
    lineDashV: 1222,
    yAxis: 1500,
  },
  {
    name: "Mar",
    areaDashV: 850,
    lineDashV: 1333,
    yAxis: 2000,
  },
];

const Compare = (props) => (
  <div className="col-lg-6">
    <Project title={props.title} value={props.value} percent={props.percent} />
    <ResponsiveContainer width="100%" height={188}>
      <ComposedChart
        data={chartData}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid vertical={false} stroke="#f4f4f4" />
        <XAxis dataKey="name" />
        <YAxis dataKey="yAxis" />
        <Area
          type="linear"
          dataKey="lineV"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="#dea831"
          dot={{ fill: "#dea831", fillOpacity: "1" }}
        />
        <Area
          type="linear"
          dataKey="lineDashV"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="#dea831"
          strokeDasharray="5 5"
          dot={{ fill: "#dea831", fillOpacity: "1" }}
        />
        <Area
          type="linear"
          dataKey="areaV"
          fill="rgba(51, 132, 175, 0.15)"
          stroke="#3384af"
          dot={{ fill: "#3384af", fillOpacity: "1" }}
        />
        <Area
          type="linear"
          dataKey="areaDashV"
          fill="rgba(51, 132, 175, 0.15)"
          stroke="#3384af"
          strokeDasharray="5 5"
          dot={{ fill: "#3384af", fillOpacity: "1" }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
);

export default Compare;
