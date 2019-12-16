import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import LogoImage from "images/logo.png";

const styles = theme => ({
  presentBox: {
    width: "100%",
    marginTop: "2rem",
    marginBottom: "1rem",
    textAlign: "center"
  },
  logo: {
    marginBottom: "3rem",
    "& img": {
      height: "22px"
    }
  },
  welcome: {
    width: "100%",
    fontSize: "18px"
  },
  title: {
    width: "100%",
    fontSize: "22px",
    fontWeight: "600"
  },
  message: {
    width: "100%",
    fontSize: "12px",
    fontWeight: "200"
  }
});

const PresentationBox = ({ classes, welcomeMessage, title, message }) => {
  return (
    <div className={classes.presentBox}>
      <Link to="/">
        <div className={classes.logo}>
          <img src={LogoImage} alt="login title" />
        </div>
      </Link>
      {welcomeMessage && (
        <div className={classes.welcome}>{welcomeMessage}</div>
      )}
      {title && <div className={classes.title}>{title}</div>}
      {message && <div className={classes.message}>{message}</div>}
    </div>
  );
};

export default withStyles(styles)(PresentationBox);
