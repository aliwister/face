import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

import Spinner from "components/ui/Spinner";
import PresentationBox from "components/ui/PresentationBox";
import IconTextField from "components/ui/IconTextField";
import { withLocalize, Translate } from "react-localize-redux";

const styles = theme => ({
  paper: {
    minWidth: "363px",
    width: "50vw",
    height: "350px",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
    [theme.breakpoints.only("xs")]: {
      backgroundColor: "transparent",
      boxShadow: "none",
      width: "100%"
    }
  },
  textField: {
    fontSize: "23px",
    marginBottom: "2rem",
    width: "299px"
  },
  loginForm: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "363px"
  },
  loginButton: {
    border: "none",
    width: "299px",
    height: "3.5rem",
    minHeight: "30px",
    backgroundColor: theme.badals.general.main,
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "300",
    position: "relative",
    marginTop: "1rem",
    "&:hover": {
      backgroundColor: theme.badals.general.main,
      cursor: "pointer"
    }
  },
  errorMessage: {
    fontSize: "0.8rem",
    textAlign: "center",
    fontWeight: "100",
    padding: "0  1rem 1rem 1rem",
    color: theme.badals.general.red
  },
  submitBlock: {
    marginBottom: "2.35rem"
  }
});

//const validate = validateForgotPasswordForm;

const ForgotPasswordForm = ({
  handleSubmit,
  submitSucceeded,
  submitting,
  submitFailed,
  classes,
  translate
}) => {
  //componentDidMount() {
  //   this.props.reset()
  // }

  const presentationBoxTitle = () => {
    return <div>Forgot your password?</div>;
  };

  const presentationBoxMessage = () => {
    return (
      <div>
        <div>Enter your email and we’ll send you</div>
        <div>a password reset link.</div>
      </div>
    );
  };

  const confirmationBoxWelcomeMessage = () => {
    return <div>We have sent you an email with reset instractions.</div>;
  };

  const confirmationBoxTitle = () => {
    return <div>Success!</div>;
  };

  const confirmationBoxMessage = () => {
    return (
      <div>
        <div>
          If the email doesn't arrive soon, please, check your spam folder.
        </div>
        <div>
          It was sent from <a>support@badals.com</a>
        </div>
      </div>
    );
  };

  const getErrorMessage = () => {
    let error = null;
    try {
      //error = this.props.forgotPasswordForm.submitErrors.errorMassage;
    } catch (e) {}
    return error;
  };
  const errorMessage = "x";
  return (
    <Paper>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          password: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <div>
          <PresentationBox
            title={presentationBoxTitle()}
            message={presentationBoxMessage()}
          />

          <Form className={classes.loginForm}>
            <div>
              <Field
                name="email"
                type="email"
                className={classes.textField}
                component={IconTextField}
                label={translate("user.account.email")}
              />
            </div>

            <div style={{ width: "299px", textAlign: "center" }}>
              {errorMessage && (
                <strong className={classes.errorMessage}>{errorMessage}</strong>
              )}
            </div>
            <div className={classes.forgotPasswordBlock}>
              <Link to="/login">
                <span className={classes.forgotPasswordMessage}>
                  <Translate id="user.account.forgotpassword" />
                </span>
              </Link>
            </div>
            <div>
              <button type="submit" className={classes.loginButton}>
                Submit
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    //forgotPasswordForm: state.form.forgotPasswordForm
  };
};

export default withStyles(styles)(withLocalize(ForgotPasswordForm));
