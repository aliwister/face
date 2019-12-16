import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Footer from "components/AppFooter/Footer";
import Header from "components/AppHeader/Header";
import MainContainer from "./Container";

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: "100%"
  },
  appFrame: {
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    width: "100%",

    minHeight: "100%",
    display: "grid",
    gridTemplateRows: "1fr auto"
  },
  content: {
    flexGrow: 1,
    backgroundColor: "#f5f6fa",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginTop: "7vh",
    overflow: "auto"
  }
});

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <Header />
          <main className={classNames(classes.content)}>
            <MainContainer>{this.props.children}</MainContainer>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MainLayout);
