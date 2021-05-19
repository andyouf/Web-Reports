import React from "react";

import { FlexContainer } from "../../styled/styled.lib";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { title, subTitle, value, percent, keys, gaps } from "../../fakeData";
import Project from "./Project";
import Container from "../../shared/Container";

const Projection = (props) => {
  const type = props.type;
  return (
    <>
      {type === "paid" ? (
        <FlexContainer column txtCenter type="paid" className="mt-5">
          <h3>{title[type]}</h3>
          <Project
            title={subTitle[type]}
            value={value[type]}
            percent={percent[type]}
            type={type}
          />
          <a href="/" className="link-style mt-2 mb-4">
            Show Details
          </a>
        </FlexContainer>
      ) : (
        <>
          <FlexContainer align="baseline">
            <h3>{title[type]}</h3>
            <a href="/" className="link-style">
              Show Details
            </a>
          </FlexContainer>
          <Container>
            <LeftSide
              title={subTitle[type]}
              value={value[type]}
              percent={percent[type]}
            />
            <RightSide keys={keys[type]} gaps={gaps[type]} />
          </Container>
        </>
      )}
    </>
  );
};

export default Projection;
