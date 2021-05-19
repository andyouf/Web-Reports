import React from "react";

import BaseComponent from "../components/shared/BaseComponent";
import ProductPage from "../components/ProductPage";
import { Text } from "../components/styled/styled.lib";
import { measurings } from "../components/fakeData";

const measureList = measurings.map((item, index) => (
  <ProductPage key={index} value={item} />
));

const Products = () => (
  <BaseComponent>
    <Text type="periodT">December 21 - January 18, 2020</Text>
    <h2>By Product</h2>
    {measureList}
  </BaseComponent>
);

export default Products;
