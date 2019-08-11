import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import CircularProgress from "@material-ui/core/CircularProgress";
import TableMain from "./TableMain";
import CustomTableHead from "./TableHead";
import Paginator from "./Paginator";
import Search from "./Search";

class TableRoot extends Component {
  state = {
    gotData: false,
    pageData: [],
    pageNumber: null,
    totalPages: 0,
    filterStr: ""
  };

  componentDidMount() {}

  handlePageChange = () =>
    console.log("show page number change and get pageData");

  handleSearch = () => console.log("Page Changin");

  handleExpandItem = () => console.log("displays data being expanded");

  init = () => console.log("getting  initial data, pageData, totalRows");

  render() {
    const { gotData, pageData, pageNumber, totalPages, filterStr } = this.state;
    return (
      <div style={{ margin: 15 }}>
        <h3>Sale's orders</h3>

        <Paper>
          <Search filterStr={filterStr} handleSearch={this.handleSearch} />
          <Table>
            <CustomTableHead />
            {!gotData && <CircularProgress color="primary" />}
            {gotData && <TableMain pageData={pageData} />}
            <Paginator
              pageNumber={pageNumber}
              totalPages={totalPages}
              handlePageChange={this.handlePageChange}
            />
          </Table>
        </Paper>
      </div>
    );
  }
}

export default TableRoot;
