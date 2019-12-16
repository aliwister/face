import React from "react";
import { PropagateLoader } from "react-spinners";
import theme from "theme";

const Spinner = props => (
  <PropagateLoader color={theme.badals.general.main} loading={props.loading} />
);

export default Spinner;
