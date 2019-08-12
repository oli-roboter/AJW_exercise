import React, { useState, Fragment } from "react";
// import NumberFormat from "react-number-format";
import ExpandButton from "../../components/ExpandButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import OrderDetail from "./OrderDetail";
import { getOrderDetail } from "../../data/data-function";

const CustomTableRow = ({ rowData }) => {
  const [detail, setDetail] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleClick = () => {
    const orderDetail = getOrderDetail(rowData.SaleOrderDetailAutoKey);
    setDetail(orderDetail[0]);
    setShowDetail(!showDetail);
  };

  return (
    <Fragment>
      <TableRow>
        <TableCell align="left">
          <ExpandButton onClick={handleClick} showDetail={showDetail} />
        </TableCell>
        <TableCell component="th" scope="row">
          {rowData.soNumber}
        </TableCell>
        <TableCell align="left">
          {moment(
            rowData.dateCreated,
            moment.HTML5_FMT.DATETIME_LOCAL_SECONDS
          ).format("DD-MM-YYYY")}
        </TableCell>
        <TableCell align="center">{rowData.companyRefNumber}</TableCell>
        <TableCell align="center">{rowData.itemNumber}</TableCell>
        <TableCell align="center">{rowData.shipAddress1}</TableCell>
        <TableCell align="center">{rowData.companyName}</TableCell>
        <TableCell align="center">{rowData.pnUpper}</TableCell>
      </TableRow>
      {showDetail && <OrderDetail detail={detail} />}
    </Fragment>
  );
};

export default CustomTableRow;
