import React from "react";

import {
  FlexContainer,
  OutlineButton,
  CurrentStatus,
  PercentValue,
} from "../styled/styled.lib";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
const TableRow = (props) => {
  const td = props.value;
  const progressVariant =
    td.con >= 50
      ? "success"
      : 30 <= td.con && td.con < 50
      ? "warning"
      : td.con < 30 && "danger";
  return (
    <tr>
      <td>
        <PercentValue size="small">{td.name}</PercentValue>
      </td>
      <td>
        <FlexContainer>
          <FlexContainer align="center" className="mr-3">
            <CurrentStatus size="small" variant={td.sub.car_status} />
            <PercentValue size="normal">{td.sub.carrier}</PercentValue>
          </FlexContainer>
          <small>
            <FlexContainer align="center" className="font-size">
              (
              <CurrentStatus size="small" variant={td.sub.avg_status} />
              <PercentValue size="small">{td.sub.avg}</PercentValue>)
            </FlexContainer>
          </small>
        </FlexContainer>
      </td>
      <td>
        <PercentValue size="normal" className="mr-3">
          {td.subed.carrier}
        </PercentValue>
        <PercentValue size="small">({td.subed.avg})</PercentValue>
      </td>
      <td>
        <FlexContainer>
          <FlexContainer align="center" className="mr-3">
            <CurrentStatus size="small" variant={td.pre.car_status} />
            <PercentValue size="normal">{td.pre.carrier}</PercentValue>
          </FlexContainer>
          <small>
            <FlexContainer align="center" className="font-size">
              (
              <CurrentStatus size="small" variant={td.pre.avg_status} />
              <PercentValue size="small">{td.pre.avg}</PercentValue>)
            </FlexContainer>
          </small>
        </FlexContainer>
      </td>
      <td>
        <PercentValue size="small">{td.loss}</PercentValue>
      </td>
      <td className="custom-width">
        <ProgressBar variant={progressVariant} now={td.con} />
      </td>
      <td>
        <OutlineButton>Learn More</OutlineButton>
      </td>
    </tr>
  );
};

const DistributorPage = (props) => {
  const item = props.value;

  const tableRow = item.tableData.map((item, index) => (
    <TableRow key={index} value={item} />
  ));

  return (
    <section>
      <FlexContainer align="baseline">
        <h3>
          {item.title}
          <small>({item.small})</small>
        </h3>
        <a href="/" className="link-style">
          Show Details
        </a>
      </FlexContainer>
      <Table hover responsive="lg">
        <thead>
          <tr>
            <th>Name</th>
            <th>Submissions %</th>
            <th>Submitted premium</th>
            <th>Submitted premium</th>
            <th>Loss</th>
            <th>Confidence</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={"tbody-back" + item.num}>{tableRow}</tbody>
      </Table>
    </section>
  );
};

export default DistributorPage;
