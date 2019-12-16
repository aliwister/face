import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import IconTextField from "components/ui/IconTextField";

import { withStyles } from "@material-ui/core/styles";
import { withLocalize, Translate } from "react-localize-redux";

const styles = theme => ({
  paper: {
    minWidth: "363px",
    width: "50vw",
    height: "425px",
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
  loginForm: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "363px",
    marginTop: "3rem"
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
  textField: {
    fontSize: "23px",
    marginBottom: "1rem",
    width: "350px"
  },
  forgotPasswordBlock: {
    // width: '18.75rem',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  forgotPasswordMessage: {
    fontSize: "1rem",
    [theme.breakpoints.only("xs")]: {
      fontSize: "0.8rem"
    },
    color: theme.badals.general.main,
    "&:hover": {
      cursor: "pointer"
    },
    fontWeight: "100"
  },
  errorMessage: {
    fontSize: "0.8rem",
    textAlign: "center",
    fontWeight: "100",
    padding: "0  1rem 1rem 1rem",
    color: theme.badals.general.red
  },
  inputField: {
    height: "100%",
    width: "80%"
  },
  submitBlock: {
    marginBottom: "2.35rem"
  }
});

const LoginForm = ({ classes, translate, errorMassage }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        password: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Required")
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
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
        <div>
          <Field
            name="password"
            type="password"
            className={classes.textField}
            component={IconTextField}
            label={translate("user.account.password")}
          />
        </div>
        <div style={{ width: "299px", textAlign: "center" }}>
          {errorMassage && (
            <strong className={classes.errorMessage}>{errorMassage}</strong>
          )}
        </div>
        <div className={classes.forgotPasswordBlock}>
          <Link to="/forgot-password">
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
    </Formik>
  );
};
export default withStyles(styles)(withLocalize(LoginForm));
