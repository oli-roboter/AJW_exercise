import React from "react";
import { InputBase, IconButton, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ searchStr, onChange }) => (
  <Paper className="search" elevation={0}>
    <InputBase
      placeholder="Search Sales Order or Part Number"
      onChange={onChange}
    />
    <IconButton aria-label="search" className="icon">
      <SearchIcon />
    </IconButton>
  </Paper>
);

export default Search;
