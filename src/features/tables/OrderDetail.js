import React, { Fragment } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const OrderDetail = ({ detail }) => {
  const keys = Object.keys(detail);
  const existingData = [
    "companyRefNumber",
    "dateCreated",
    "itemNumber",
    "shipAddress1",
    "companyName",
    "pnUpper"
  ];
  const filteredKeys = keys.filter(k => existingData.indexOf(k) < 0);

  return (
    <Fragment>
      {filteredKeys.map((key, idx) => (
        <TableRow key={idx}>
          <TableCell />
          <TableCell colSpan={2} align="left">
            {key}:
          </TableCell>
          <TableCell colSpan={4} align="left">
            {detail[key]}
          </TableCell>
        </TableRow>
      ))}
    </Fragment>
  );
};
export default OrderDetail;
