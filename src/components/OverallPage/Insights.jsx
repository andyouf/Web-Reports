import React from "react";

import Insight from "./Insight";
import Container from "../shared/Container";

const Insights = ({ type }) => {
  return (
    <section>
      <h2>
        <i className="material-icons">highlight</i>
        {type} Insights
      </h2>
      <Container>
        <Insight />
        <Insight />
        <Insight />
      </Container>
    </section>
  );
};

export default Insights;
