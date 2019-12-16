import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles/index";
import MainLayout from "components/AppMain/Layout";
//import {loadAllProducts} from '../../state/product/actions'
//import ProductsGrid from '../../components/ProductGrid'
//import BadalsContainer from '../../components/ProductGrid'
import { Grid, Hidden, Chip } from "@material-ui/core";
//import Spinner from '../../components/common/Spinner';

const styles = theme => ({
  container: {
    height: "54vh"
  }
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.loadAllProducts();
  }

  render() {
    const { classes, product } = this.props;
    return <MainLayout />;
  }
}

const mapStateToProps = state => ({
  product: state.product
});
const mapDispatchToProps = dispatch => ({
  loadAllProducts: () => {
    //dispatch(loadAllProducts());
  }
});

export default withStyles(styles, { withTheme: true })(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(Home))
);
