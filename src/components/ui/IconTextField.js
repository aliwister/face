import React, { useState } from "react";
import { InputAdornment } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import PropTypes from "prop-types";

const styles = theme => ({
  eyeButton: {
    "&:hover": {
      background: "none",
      color: theme.badals.general.main,
      cursor: "pointer"
    }
  }
});

const IconTextField = ({
  classes,
  field,
  value,
  form: { touched, errors, values },
  className,
  type,
  ...custom
}) => {
  const [passwordMask, setPasswordMask] = useState(true);

  function togglePasswordMask() {
    setPasswordMask(!passwordMask);
  }

  console.log(values);
  console.log(field);
  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const showEndAdornment = type === "password";
  const endAdornment = showEndAdornment && (
    <InputAdornment position="end">
      <IconButton
        aria-label="Toggle password visibility"
        onClick={togglePasswordMask}
        onMouseDown={handleMouseDownPassword}
        className={classes.eyeButton}
      >
        {passwordMask ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
  const fieldType = showEndAdornment && !passwordMask ? "text" : type;
  return (
    <TextField
      id="filled-basic"
      label="Filled"
      variant="filled"
      className={className}
      style={{}}
      type={fieldType}
      {...field}
      {...custom}
      error={!!(touched && errors[field.name])}
      InputProps={{
        classes: {
          root: classes.inputRoot
        },
        endAdornment: endAdornment
      }}
      helperText={errors[field.name]}
    />
  );
};

IconTextField.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconTextField);
