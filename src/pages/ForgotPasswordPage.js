import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ForgotPasswordForm from "forms/ForgotPasswordForm";
import { withStyles } from "@material-ui/core/styles";
import MainContainer from "components/AppMain/Container";

const styles = theme => ({
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "80vh",
    backgroundSize: "contain!important"
  }
});

const ForgotPassword = ({ location, classes }) => {
  /*const [loginFlag, setloginFlag] = useState(2);

  useEffect(() => {
    console.log(`L = ${loginFlag}`);
    localStorage.removeItem("token", "something");
  }, [loginFlag]);
*/
  const { from } = location.state || { from: { pathname: "/" } };
  if (localStorage.getItem("token")) return <Redirect to={from} />;

  return (
    <MainContainer>
      <div className={classes.loginContainer}>
        <ForgotPasswordForm />
      </div>
    </MainContainer>
  );
};

ForgotPassword.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    null
  )(ForgotPassword)
);
