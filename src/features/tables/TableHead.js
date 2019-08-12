import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const CustomTableHead = () => (
  <TableHead>
    <TableRow>
      <TableCell align="center" />
      <TableCell align="left">Sales Order</TableCell>

      <TableCell align="left">Date</TableCell>

      <TableCell align="center">Po Ref</TableCell>

      <TableCell align="center">Line item</TableCell>

      <TableCell align="center">Ship To</TableCell>

      <TableCell align="right">Customer</TableCell>

      <TableCell align="right">Part Number</TableCell>
    </TableRow>
  </TableHead>
);

export default CustomTableHead;
