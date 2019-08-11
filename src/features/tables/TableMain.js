import React, { Fragment } from "react";
import NumberFormat from "react-number-format";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TableMain = ({ pageData }) => (
  <TableBody>
    <Fragment>
      {pageData.map(row => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row" style={{ width: 100 }}>
            {row.first_name}
          </TableCell>
          <TableCell align="left" style={{ width: 100 }}>
            {row.last_name}
          </TableCell>
          <TableCell align="center" style={{ width: 100 }}>
            {row.email}
          </TableCell>
          <TableCell align="center" style={{ width: 50 }}>
            {row.date_of_birth}
          </TableCell>
          <TableCell align="center" style={{ width: 250 }}>
            {row.industry}
          </TableCell>
          <TableCell align="right" style={{ width: 50 }}>
            <NumberFormat
              value={Math.round(row.salary)}
              thousandSeparator={true}
              displayType={"text"}
            />
          </TableCell>
          <TableCell align="right" style={{ width: 50 }}>
            {row.years_of_experience === null
              ? row.years_of_experience
              : row.years_of_experience.toFixed(1)}
          </TableCell>
        </TableRow>
      ))}
    </Fragment>
  </TableBody>
);

export default TableMain;
