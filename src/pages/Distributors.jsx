import React from "react";

import BaseComponent from "../components/shared/BaseComponent";
import DistributorPage from "../components/DistributorPage";
import { Text } from "../components/styled/styled.lib";
import { distributors } from "../components/fakeData";

const distributorList = distributors.map((item, index) => (
  <DistributorPage key={index} value={item} />
));

const Distributors = () => (
  <BaseComponent type="distributor">
    <Text type="periodT">December 21 - January 18, 2020</Text>
    <h2>By Distributors</h2>
    {distributorList}
  </BaseComponent>
);

export default Distributors;
