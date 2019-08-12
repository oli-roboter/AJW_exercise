import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  icon: {
    margin: theme.spacing(2)
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: red[800]
    }
  }
}));

const ExpandButton = ({ onClick, showDetail }) => {
  const classes = useStyles();

  return (
    <Icon
      className={classes.iconHover}
      color="primary"
      style={{ fontSize: 30 }}
      onClick={onClick}
    >
      {showDetail ? "remove_circle" : "add_circle}"}
    </Icon>
  );
};

export default ExpandButton;
