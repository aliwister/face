import React from "react";
import Grid from "@material-ui/core/Grid";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

const styles = theme =>
  createStyles({
    root: {},
    container: {
      ...theme.badals.globalContainer
    }
  });

const MainContainer = props => {
  const { classes, children, xs, spacing, justify } = props;
  return (
    <div className={classNames("MainContainer", classes.root)}>
      <Grid container justify={justify} spacing={spacing}>
        <Grid item xs={xs} className={classes.container}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

MainContainer.defaultProps = {
  xs: 12,
  spacing: 0,
  justify: "center"
};

export default withStyles(styles)(MainContainer);
