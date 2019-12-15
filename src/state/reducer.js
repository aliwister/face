import { combineReducers } from "redux";
//import {reducer as beesReducer} from 'redux-bees';
//import {reducer as formReducer} from 'redux-form'
//import user from './user/reducers';
//import product from './product/reducers';
//import shipment from './shipment/reducers';
//import pricing from './pricing/reducers';
//import cart from './cart/reducers';
//import auth from './auth/reducers';
import { localizeReducer } from "react-localize-redux";
import { connectRouter } from "connected-react-router";

export default history =>
  combineReducers({
    localize: localizeReducer,
    router: connectRouter(history)
    //user,
    //product,
    //pricing,
    //cart,
    //auth,
    //shipment,
    //bees: beesReducer,
    //form: formReducer,
  });
