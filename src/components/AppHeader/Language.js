import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import LanguageIcon from "@material-ui/icons/Language";
import { withStyles } from "@material-ui/core/styles";

import { NavLink, Link, withRouter } from "react-router-dom";
import { withLocalize } from "react-localize-redux";
import { connect } from "react-redux";

const drawerWidth = 240;
const styles = theme => ({
  popover: {
    pointerEvents: "none"
  },
  paper: {
    padding: theme.spacing.unit
  }
});

const HeaderLanguage = ({ user, classes, setActiveLanguage, languages }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const setLanguage = code => {
    handleMenuClose();
    setActiveLanguage(code);
  };

  return (
    <span>
      <IconButton
        className={classes.languageButton}
        aria-owns={anchorEl ? "simple-menu" : undefined}
        aria-haspopup="true"
        onClick={handleMenuOpen}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {languages.map(lang => (
          <MenuItem key={lang.code} onClick={() => setLanguage(lang.code)}>
            {lang.name}
          </MenuItem>
        ))}
      </Menu>
    </span>
  );
};
const mapStateToProps = state => {
  return {
    user: state.user
    //itemsAmount: state.cart.products ? state.cart.products.length : 0
  };
};
const mapDispatchToProps = dispatch => ({
  setActiveLanguage: data => {
    //dispatch(setActiveLanguage(data));
  }
});

// export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, null)(withRouter(AppHeader));
export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    null
  )(withLocalize(withRouter(HeaderLanguage)))
);
