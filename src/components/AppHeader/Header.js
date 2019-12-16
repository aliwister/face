import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import MenuDown from "@material-ui/icons/ArrowDropDown";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import ShoppingCart from "@material-ui/icons/ShoppingCart";
import PersonOutline from "@material-ui/icons/PersonOutline";
import Grid from "@material-ui/core/Grid";
import { NavLink, Link, withRouter } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
//import logoTitle from '../../../assets/images/badals-logo@3x.png';
import MainContainer from "components/AppMain/Container";
import HeaderSearch from "./Search";
import HeaderLanguage from "./Language";
//import badalsAPI from "../../../api/config";
//import { isAuth } from "../../../api/config";
import { connect } from "react-redux";
import { withLocalize, Translate } from "react-localize-redux";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: "absolute",
    backgroundColor: "white",
    boxShadow: "0px 2px #e3e3e3",
    color: "white",
    [theme.breakpoints.only("sm")]: {
      padding: "0 50px"
    },
    [theme.breakpoints.only("xs")]: {
      padding: "0"
    }
  },
  searchBox: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
    fontSize: "14px",
    "& a": {
      color: "#a0a6b5",
      padding: "0 1rem"
    },
    "& a.active, & a.selected": {
      color: "#4c84ff"
    },
    "& a:after": {
      background: "#4c84ff",
      content: `''`,
      width: "0",
      display: "block",
      height: "2px",
      transition: "width .3s",
      position: "relative",
      top: "22px"
    },
    "& a.active:after, a.selected:after": {
      width: "100%"
    }
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  flex: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#4c84ff",
    "& img": {
      // width: '63px'
      width: "163px"
    }
  },
  userMenuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  margin: {
    margin: theme.spacing.unit,
    marginTop: 0,
    padding: "-10px",
    display: "inline-block"
  },
  navList: {
    a: { textDecoration: "none" },
    paddingTop: 49
  },
  listItemRoot: {
    "&>div": {
      color: "#adb5c2",
      fontFamily: "Poppins, san-serif"
    },
    marginBottom: "8px"
  },
  label: {
    fontSize: "0.85rem",
    color: "#fff"
  },
  inputWrapper: {
    border: "rgba(255,255,255,0.7) 1px solid",
    borderRadius: "2px",
    display: "flex",
    alignItems: "center",
    marginRight: "1rem",
    "& svg": {
      opacity: "0.7"
    },
    "&:focus": {
      border: "rgba(255,255,255,1) 1px solid"
    }
  },
  avatar: {
    color: theme.badals.general.main,
    marginRight: "0.5rem",
    height: "2rem",
    fontSize: "0.85rem"
  },
  cartButton: {
    marginLeft: "0.5rem",
    borderRadius: 0,
    "&:hover": {
      background: "none",
      color: theme.badals.general.main
    },
    "&.active": {
      background: "none",
      color: theme.badals.general.main
    }
  },
  signButton: {
    lineHeight: "1rem",
    width: "100%",
    borderRadius: 0,
    fontSize: "14px",
    color: theme.badals.general.darkGray,
    borderRight: `1px solid  ${theme.badals.general.gray}`,
    "&:hover": {
      background: "none",
      color: theme.badals.general.main
    }
  },
  languageButton: {
    display: "flex",
    borderRadius: 0,
    lineHeight: "1rem",
    borderRight: `1px solid  ${theme.badals.general.gray}`,
    "&:hover": {
      background: "none",
      color: theme.badals.general.main
    }
  }
});

class Header extends React.Component {
  state = {
    openDrawer: false,
    openMenu: false,
    anchor: "left",
    anchorEl: null,
    isActive: true,
    open: false
  };

  handleMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    localStorage.removeItem("token");
    //delete badalsAPI.defaults.headers.common["Authorization"];
    window.location.replace("/");
  };
  render() {
    const {
      classes,
      user,
      location: { pathname }
    } = this.props;
    const { openDrawer, anchorEl } = this.state;
    const auth = false; //!!isAuth();
    const openMenu = Boolean(anchorEl);
    return (
      <AppBar>
        <MainContainer>
          <Toolbar disableGutters={!openDrawer}>
            <Hidden only={"xs"}>
              <Grid item xs={12} lg={3}>
                <Typography
                  variant="subheading"
                  color="inherit"
                  className={classes.flex}
                >
                  <NavLink to={"/"} />
                </Typography>
              </Grid>
            </Hidden>

            <Grid item xs={12} lg={5}>
              <HeaderSearch
                className={classes.searchBox}
                caption={this.props.translate("searchbox")}
              />
            </Grid>

            <Grid item xs={12} lg={4}>
              <Grid
                container
                style={{ justifyContent: "flex-end", display: "flex" }}
              >
                <Grid item xs={4}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    <Hidden only={"xs"}>
                      <HeaderLanguage className={classes.languageButton} />
                    </Hidden>
                  </div>
                </Grid>
                <Grid item xs={6} className={classes.personalBox}>
                  {!auth ? (
                    <Link to="/login">
                      <IconButton
                        className={classes.signButton}
                        aria-owns={openMenu ? "menu-appbar" : null}
                        aria-haspopup="true"
                      >
                        <PersonOutline />
                        <div style={{ fontSize: "14px" }}>
                          <Translate id="user.signin" />
                        </div>
                      </IconButton>
                    </Link>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <IconButton
                        className={classes.signButton}
                        aria-owns={openMenu ? "menu-appbar" : null}
                        aria-haspopup="true"
                        onClick={this.handleMenuOpen}
                        color="inherit"
                      >
                        <PersonOutline />
                        <div>
                          {user.user
                            ? `${user.user.firstname +
                                " " +
                                user.user.lastname}`
                            : "Test"}
                        </div>
                        <MenuDown />
                      </IconButton>
                      <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                          vertical: "top",
                          horizontal: "right"
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right"
                        }}
                        open={openMenu}
                        onClose={this.handleMenuClose}
                      >
                        <Link to={"/profile"}>
                          <MenuItem onClick={this.handleMenuClose}>
                            <Translate id="user.profile" />
                          </MenuItem>
                        </Link>
                        <MenuItem onClick={this.handleLogout}>
                          <Translate id="user.signout" />
                        </MenuItem>
                      </Menu>
                    </div>
                  )}
                </Grid>
                <Grid item xs={2}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "start"
                    }}
                  >
                    <Link to={"/cart"}>
                      <IconButton
                        className={classNames(classes.cartButton, {
                          //active: this.props.itemsAmount
                        })}
                      >
                        <ShoppingCart />
                        <div style={{ fontSize: "13px" }} />
                      </IconButton>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </MainContainer>
      </AppBar>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
    //itemsAmount: state.cart.products ? state.cart.products.length : 0
  };
};

// export default withStyles(styles, {withTheme: true})(connect(mapStateToProps, null)(withRouter(AppHeader));
export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    null
  )(withLocalize(withRouter(Header)))
);
