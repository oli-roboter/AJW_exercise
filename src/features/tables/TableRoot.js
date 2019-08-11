import React, { Component, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
// import CircularProgress from "@material-ui/core/CircularProgress";
import TableMain from "./TableMain";
import CustomTableHead from "./TableHead";
import Paginator from "./Paginator";
import Search from "./Search";
import { getData } from "../../data/data-function";

class TableRoot extends Component {
  state = {
    gotData: false,
    pageData: [],
    pageNumber: 0,
    totalRows: 0,
    filterStr: "",
    pageSize: 10
  };

  componentDidMount() {
    const { pageNumber, pageSize, filterStr } = this.state;
    const data = getData(pageNumber, pageSize, filterStr);

    this.setState({
      pageData: data.pageData,
      totalRows: data.totalRows,
      gotData: true
    });
  }

  handlePageChange = (event, newPage) => {
    console.log("handlePageChange", newPage);
    const { pageSize, filterStr } = this.state;
    const data = getData(newPage, pageSize, filterStr);
    this.setState({
      pageData: data.pageData,
      pageNumber: newPage,
      totalRows: data.totalRows
    });
  };

  handleSearch = event => {
    const { pageNumber, pageSize } = this.state;
    const data = getData(pageNumber, pageSize, event.target.value);
    this.setState({
      pageData: data.pageData,
      totalRows: data.totalRows
    });
  };

  handleExpandItem = () => console.log("displays data being expanded");

  render() {
    const { gotData, pageData, pageNumber, totalRows, filterStr } = this.state;

    return (
      <div style={{ margin: 15 }}>
        <h3>Sale's orders</h3>

        <Paper>
          <Search filterStr={filterStr} onChange={this.handleSearch} />
          <Table>
            <CustomTableHead />
            {gotData && <TableMain tableData={pageData} />}
          </Table>

          <Paginator
            pageNumber={pageNumber}
            totalRows={totalRows}
            handlePageChange={this.handlePageChange}
          />
        </Paper>
      </div>
    );
  }
}

export default TableRoot;
