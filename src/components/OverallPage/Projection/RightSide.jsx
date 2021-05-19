import React from "react";

import {
  ValueHeader,
  FlexContainer,
  Li,
  Circle,
} from "../../styled/styled.lib";
import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Label,
  Cell,
  Tooltip,
} from "recharts";

const COLORS = ["#265b85", "#3384af", "#66bcea", "#e0e1de"];
const dataPie = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
];

const Predictive = (props) => {
  const keys = props.keys;
  const gaps = props.gaps;
  const keyItems = keys.map((key, index) => (
    <Li variant="key" key={index}>
      <Circle color={index} />
      {key}
    </Li>
  ));
  const gapItems = gaps.map((gap, index) => (
    <Li variant="gap" key={index}>
      {gap}
    </Li>
  ));
  return (
    <div className="col-lg-6">
      <FlexContainer column justify="space-around" className="h-100">
        <FlexContainer justify="space-between">
          <ValueHeader size="small">
            <i className="material-icons">highlight</i>Key Predictive Drivers
          </ValueHeader>
          <ValueHeader size="small">Impact on gap</ValueHeader>
        </FlexContainer>
        <FlexContainer justify="space-between" align="center">
          <ResponsiveContainer width="25%" height={188}>
            <PieChart>
              <Pie
                data={dataPie}
                nameKey="name"
                dataKey="value"
                innerRadius="70%"
                outerRadius="100%"
              >
                {dataPie.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
                <Label
                  value="-214"
                  position="centerBottom"
                  className="label-top"
                  fill="#f22736"
                />
                <Label
                  value="Gap"
                  position="centerTop"
                  className="label-bottom"
                  fill="#f22736"
                />
                <Tooltip />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <FlexContainer justify="space-between" className="w-100">
            <ul>{keyItems}</ul>
            <ul>{gapItems}</ul>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </div>
  );
};

export default Predictive;
