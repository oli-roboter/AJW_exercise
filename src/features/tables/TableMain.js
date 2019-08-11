import React from "react";
import NumberFormat from "react-number-format";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";

const TableMain = ({ tableData }) => {
  console.log("TableMain", tableData);

  return (
    <TableBody>
      {tableData.map((row, idx) => (
        <TableRow key={idx}>
          <TableCell component="th" scope="row">
            {row.soNumber}
          </TableCell>
          <TableCell align="left">
            {moment(
              row.dateCreated,
              moment.HTML5_FMT.DATETIME_LOCAL_SECONDS
            ).format("DD-MM-YYYY")}
          </TableCell>
          <TableCell align="center">{row.companyRefNumber}</TableCell>
          <TableCell align="center">{row.itemNumber}</TableCell>
          <TableCell align="center">{row.shipAddress1}</TableCell>
          <TableCell align="center">{row.companyName}</TableCell>
          <TableCell align="center">{row.pnUpper}</TableCell>
          {/* <TableCell align="right">
            <NumberFormat
              value={Math.round(row.salary)}
              thousandSeparator={true}
              displayType={"text"}
            />
          </TableCell>
          <TableCell align="right">
            {row.years_of_experience === null
              ? row.years_of_experience
              : row.years_of_experience.toFixed(1)}
          </TableCell> */}
        </TableRow>
      ))}
    </TableBody>
  );
};
export default TableMain;
