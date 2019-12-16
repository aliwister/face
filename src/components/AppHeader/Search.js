import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputAdornment } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";

const styles = theme => ({
  searchIcon: {},
  searchBox: {
    width: "100%"
  },
  bootstrapRoot: {
    padding: 0,
    "label + &": {
      marginTop: theme.spacing.unit * 3
    }
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 14,
    padding: "10px 12px",
    width: "calc(100% - 24px)",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  },
  bootstrapFormLabel: {
    fontSize: 18
  }
});

class HeaderSearch extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.caption);
    this.state = {};
  }

  onSearchBoxSearch = e => {
    e.preventDefault();
  };

  onSearchClickHandler = e => {};

  render() {
    const { classes } = this.props;
    return (
      <TextField
        className={classes.searchBox}
        placeholder={this.props.caption}
        id="bootstrap-input"
        onChange={this.onSearchBoxSearch}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput
          }
          // endAdornment: (
          //     <InputAdornment position="end">
          //          <Search onClick={this.onSearchClickHandler} className={classes.searchIcon}/>
          //     </InputAdornment>
          // )
        }}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel
        }}
      />
    );
  }
}

HeaderSearch.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderSearch);
