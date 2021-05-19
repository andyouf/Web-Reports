/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/core";

import styled from "@emotion/styled";
import * as mq from "./media-queries";

const percentStatus = {
  up: {
    borderBottom: "10px solid #47c70e",
    [mq.large]: {
      borderBottom: "15px solid #47c70e",
    },
  },
  down: {
    borderTop: "10px solid #f22736",
    [mq.large]: {
      borderTop: "15px solid #47c70e",
    },
  },
};

const colors = {
  up: {
    color: "#47c70e",
  },
  down: {
    color: "#f22736",
  },
  black: {
    color: "black",
  },
  yellow: {
    color: "#dea831",
  },
  0: {
    backgroundColor: "#265b85",
  },
  1: {
    backgroundColor: "#3384af",
  },
  2: {
    backgroundColor: "#66bcea",
  },
  3: {
    backgroundColor: "#e0e1de",
  },
};

const headerSize = {
  small: {
    fontSize: "20px",
    [mq.large]: {
      fontSize: "32px",
    },
  },
  big: {
    fontSize: "24px",
    [mq.large]: {
      fontSize: "39px",
    },
  },
};

const ValueHeader = styled.p(
  {
    fontWeight: "400",
  },
  ({ size }) => headerSize[size]
);

const CurrentStatus = styled.div(
  {
    width: 0,
    height: 0,
    borderLeft: "5px solid transparent",
    borderRight: "5px solid transparent",
    [mq.large]: {
      borderLeft: "9px solid transparent",
      borderRight: "9px solid transparent",
    },
  },
  ({ variant }) => percentStatus[variant],
  ({ size }) => ({
    borderLeft: size === "big" && "7px solid transparent",
    borderRight: size === "big" && "7px solid transparent",
    [mq.large]: {
      borderLeft: size === "big" && "11px solid transparent",
      borderRight: size === "big" && "11px solid transparent",
    },
  })
);

const resultSize = {
  small: {
    fontSize: "18px",
    [mq.large]: {
      fontSize: "32px",
    },
  },
  normal: {
    fontSize: "23px",
    [mq.large]: {
      fontSize: "50px",
    },
  },
  big: {
    fontSize: "38px",
    [mq.large]: {
      fontSize: "70px",
    },
  },
  large: {
    fontSize: "42px",
    [mq.large]: {
      fontSize: "86px",
    },
  },
};

const ResultValue = styled.p(
  {
    fontWeight: "400",
    lineHeight: "1.4",
    color: "black",
  },
  ({ color }) => colors[color],
  ({ size }) => resultSize[size]
);

const percentSize = {
  small: {
    fontSize: "17px",
    [mq.large]: {
      fontSize: "28px",
    },
  },
  normal: {
    fontSize: "20px",
    [mq.large]: {
      fontSize: "34px",
    },
  },
  big: {
    fontSize: "24px",
    [mq.large]: {
      fontSize: "39px",
    },
  },
};

const PercentValue = styled.span(
  {
    color: "black",
  },
  ({ color }) => colors[color],
  ({ size }) => percentSize[size]
);

const liStatus = {
  key: {
    fontWeight: "300",
  },
  gap: {
    fontWeight: "600",
  },
};

const Li = styled.li(
  {
    fontFamily: "Open Sans",
    fontSize: "16px",
    [mq.large]: {
      fontSize: "28px",
    },
  },
  ({ variant }) => liStatus[variant]
);

const Circle = styled.span(
  {
    height: "9px",
    width: "9px",
    marginRight: "clamp(9px, 12 / 2480 * 100vw, 12px)",
    borderRadius: "50%",
    display: "inline-block",
    [mq.large]: {
      height: "16px",
      width: "16px",
    },
  },
  ({ color }) => colors[color]
);

const FlexContainer = styled.div(
  {
    display: "flex",
    "&.current-state-container": {
      flex: 1,
    },
  },
  (props) => ({
    flexDirection: props.column && "column",
    justifyContent: props.justify,
    alignItems: props.align,
    textAlign: props.txtCenter && "center",
    backgroundColor: props.type === "paid" && "rgba(223, 236, 243, 0.36);",
    border: props.type === "paid" && "1px solid #b0cbd9",
  })
);

const ContentWrapper = styled.div({
  margin: "auto",
  display: "flex",
});

const Button = styled.button`
  padding: 4px 12px 5px 13px;
  border-radius: 6px;
  border: solid 2px #3384af;
  background-color: #3384af;
  color: #ffffff;
  font-size: 16px;
  &:hover {
    background-color: white;
    color: #3384af;
    transition: all 0.3s ease-in-out;
  }
  @media (min-width: 2479px) {
    font-size: 25px;
    padding: 6px 16px 7px 17px;
  }
`;

const OutlineButton = styled(Button)`
  background-color: #ffffff;
  color: #3384af;
  &:hover {
    background-color: #3384af;
    color: #ffffff;
  }
`;

const ptagStyle = {
  period: {
    color: "#6c6b68",
    lineHeight: "2.06",
    fontSize: "12px",
    [mq.large]: {
      fontSize: "18px",
    },
  },
  periodT: {
    color: "#6c6b68",
    lineHeight: "normal",
    fontSize: "28px",
    [mq.large]: {
      fontSize: "52px",
    },
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    [mq.large]: {
      fontSize: "36px",
    },
  },
  content: {
    color: "black",
    fontSize: "22px",
    fontWeight: "400",
    lineHeight: "1.26",
    [mq.large]: {
      fontSize: "38px",
    },
  },
  comment: {
    color: "black",
    fontSize: "17px",
    lineHeight: "1.36",
    [mq.large]: {
      fontSize: "26px",
    },
  },
};

const Text = styled.p(
  {
    color: "black",
  },
  ({ type }) => ptagStyle[type]
);

const Span = styled.span({
  fontFamily: "Poppins",
  fontWeight: "500",
  color: "#3384af",
  textDecoration: "underline",
});

const inputStyles = {
  borderRadius: "23px",
  background: "ghostwhite",
  border: "2px solid lightsteelblue",
  padding: "8px 12px",
};
const Input = styled.input({ borderRadius: "3px" }, inputStyles);

const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
});

const errorMessageVariants = {
  stacked: { display: "block" },
  inline: { display: "inline-block" },
};
function ErrorMessage({ error, variant = "stacked", ...props }) {
  return (
    <div
      role="alert"
      css={[{ color: colors.danger }, errorMessageVariants[variant]]}
      {...props}
    >
      <span>There was an error: </span>
      <pre
        css={[
          { whiteSpace: "break-spaces", margin: "0", marginBottom: -5 },
          errorMessageVariants[variant],
        ]}
      >
        {error.message}
      </pre>
    </div>
  );
}

const CircleButton = styled.button({
  borderRadius: "30px",
  padding: "0",
  width: "40px",
  height: "40px",
  lineHeight: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: colors.base,
  color: colors.text,
  border: `1px solid ${colors.gray10}`,
  cursor: "pointer",
});

export {
  CurrentStatus,
  ContentWrapper,
  ValueHeader,
  PercentValue,
  ResultValue,
  Li,
  Circle,
  FlexContainer,
  Text,
  Button,
  OutlineButton,
  Span,
  Input,
  FormGroup,
  ErrorMessage,
  CircleButton,
};
