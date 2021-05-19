import React from "react";

import {
  FlexContainer,
  ContentWrapper,
  Text,
  ResultValue,
  OutlineButton,
  CurrentStatus,
  PercentValue,
} from "../styled/styled.lib";
import Container from "../shared/Container";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const ChartComponent = (props) => {
  const data = props.chartData;
  const CustomizedLabel = ({ x, width, y, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y - 5}
        dy={-4}
        fontSize="16"
        fill="#000"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        ~{value}
      </text>
    );
  };

  return (
    <>
      <ResponsiveContainer width="90%" height={170}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="text" tick={{ fill: "#000" }} />
          <YAxis hide />
          <Bar dataKey="value" barSize={100} label={<CustomizedLabel />}>
            {data.map((entry, index) => (
              <Cell key={index} fill={index === 0 ? "#3384af" : "#dea831"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <FlexContainer justify="space-around" className="w-90">
        <FlexContainer align="center" className="current-state-container">
          <ContentWrapper>
            <CurrentStatus
              size="big"
              variant={data[0].status}
              className="mx-2"
            />
            <PercentValue color={data[0].status}>
              {data[0].percent}
            </PercentValue>
          </ContentWrapper>
        </FlexContainer>
        <FlexContainer align="center" className="current-state-container">
          <ContentWrapper>
            <CurrentStatus
              size="big"
              variant={data[1].status}
              className="mx-2"
            />
            <PercentValue color={data[1].status}>
              {data[1].percent}
            </PercentValue>
          </ContentWrapper>
        </FlexContainer>
      </FlexContainer>
    </>
  );
};

const CategoryItem = (props) => {
  const category = props.item;
  const product =
    category.type === "chart" ? (
      <ChartComponent chartData={category.chartData} />
    ) : (
      <>
        <ResultValue size="big" color="up">
          {category.value}
        </ResultValue>
        <FlexContainer>
          <i className="material-icons">highlight</i>
          <div>
            <Text type="comment" className="mt-2 mb-4">
              {category.comment}
              <a href="/" className="link-style">
                {category.distributor}
              </a>
            </Text>
            <OutlineButton>Learn More</OutlineButton>
          </div>
        </FlexContainer>
      </>
    );
  return (
    <div className="col-md-3">
      <FlexContainer column justify="space-between">
        <Text type="title" className="mb-3">
          {category.subTitle}
        </Text>
        {product}
      </FlexContainer>
    </div>
  );
};

const ProductPage = (props) => {
  const item = props.value;
  const categoryList = item.category.map((item, index) => (
    <CategoryItem key={index} item={item} />
  ));
  return (
    <section className="border-line">
      <FlexContainer align="baseline">
        <h3>{item.title}</h3>
        <a href="/" className="link-style">
          Show Details
        </a>
      </FlexContainer>
      <Container>{categoryList}</Container>
    </section>
  );
};

export default ProductPage;
