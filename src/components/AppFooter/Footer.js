import React from "react";
import { withStyles } from "@material-ui/core/styles/index";
import Grid from "@material-ui/core/Grid";
import MainContainer from "components/AppMain/Container";
import classNames from "classnames";

const styles = theme => ({
  root: {
    background: theme.badals.general.gray,
    minHeight: "300px",
    gridRowStart: 2,
    gridRowEnd: 3
  },
  logo: {
    width: "63px",
    paddingTop: "3rem",
    [theme.breakpoints.only("xs")]: {
      padding: "2rem 1rem",
      width: "100px",
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)"
    }
  },
  extendedRoot: {
    background: "#dbe7ff",
    width: "310px",
    height: "125px",
    marginTop: "3rem",
    display: "flex",
    alignItems: "center",
    paddingLeft: "2.5rem",
    marginLeft: "6.5rem",
    [theme.breakpoints.only("xs")]: {
      margin: 0
    }
  },
  extended: {
    color: "#4c84ff"
  },
  yelpLogo: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "1rem"
  },
  googleLogo: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "1rem"
  },
  footerContainer: {
    paddingTop: "4rem",
    paddingLeft: "5.5rem",
    [theme.breakpoints.only("xs")]: {
      padding: "2rem 0"
    }
  }
});

const statistics = [
  {
    label: "Buildings in New York use Honest Network!",
    value: 30,
    unit: "%"
  }
];

const AppFooter = ({ classes }) => (
  <footer>
    <div className={classNames("footer", classes.root)}>
      <MainContainer>
        <Grid container>
          <Grid item xs={6} lg={3} className={classes.footerContainer}>
            <div>CONTACTS</div>
          </Grid>
          <Grid item xs={6} lg={3} className={classes.footerContainer}>
            <div>PARTNERS</div>
          </Grid>
          <Grid item xs={6} lg={3} className={classes.footerContainer}>
            <div>COMPANY</div>
          </Grid>
          <Grid item xs={6} lg={3} className={classes.footerContainer}>
            <div>HELP</div>
          </Grid>
        </Grid>
      </MainContainer>
    </div>
  </footer>
);

export default withStyles(styles)(AppFooter);
