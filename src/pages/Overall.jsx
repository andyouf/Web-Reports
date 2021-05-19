import React from "react";
// import {Link} from 'react-router-dom';

import BaseComponent from "../components/shared/BaseComponent";
import PerformanceComponent from "../components/OverallPage/Performance";
import InsightComponent from "../components/OverallPage/Insights";
import { Text } from "../components/styled/styled.lib";

const Overall = () => (
  <BaseComponent>
    <Text type="periodT">Feb' 1 - Mar' 1, 2021</Text>
    <PerformanceComponent />
    <InsightComponent type="Top" />
    <InsightComponent type="Industry" />
  </BaseComponent>
);

export default Overall;
