import { Link } from "react-router-dom";
import { FlexContainer } from "../styled/styled.lib";

import reportLogo from "../../assets/img/Image 6.png";
import logo from "../../assets/img/Image 7.png";

const BaseComponent = (props) => (
  <>
    <header>
      <FlexContainer justify="space-between">
        <h1>
          Weekly Predictive <br />
          Performance Report
        </h1>
        <Link to="/">
          <img
            className="reportLogo"
            src={reportLogo}
            alt="Atidot Report Logo"
          />
        </Link>
      </FlexContainer>
    </header>
    <main>{props.children}</main>
    <footer className={props.type && "d-flex justify-content-between"}>
      {props.type === "distributor" && (
        <FlexContainer align="center">
          <div className="exclamation"></div>
          <p className="footer-text">
            The ‘Overall Score’ is a predictive score for the next quarter.
            <br /> This data is an estimation based on analyse of the
            distributors’ predictive performance compared to the industry and
            their potential LTV, Underinsurance, Upsell Opportunities,
            Likelihood to Place, Cycle Time Loyalty, and Lapse.
          </p>
        </FlexContainer>
      )}
      <FlexContainer align="center" justify="flex-end">
        <p className="logo-text">
          POWERED
          <br />
          BY
        </p>
        <a href="https://atidot.com">
          <img className="logo" src={logo} alt="Atidot Logo" />
        </a>
      </FlexContainer>
    </footer>
  </>
);

export default BaseComponent;
