import { all } from "redux-saga/effects";
//import watchUserSaga from './user/sagas';
//import watchPaymentSaga from './payment/sagas';
//import watchProductSaga from './product/sagas';
//import watchPricingSaga from './pricing/sagas';
//import watchSearchShipQSaga from './shipment/sagas';
//import watchCartSaga from './cart/sagas';
//import watchLoginSaga from './auth/sagas';
//import watchLoginFormSaga from './form/sagas/login';
//import watchSignUpFormSaga from './form/sagas/signup';
//import watchForgotPasswordFormSaga from './form/sagas/forgotPassword';
//import watchResetPasswordFormSaga from './form/sagas/resetPassword';
//import watchVerifyEmailSaga from './form/sagas/verifyEmail';
//import watchNewAddressFormSaga from './form/sagas/newAddress';
//import watchUserInfoFormSaga from './form/sagas/userInfo';
//import formActionSaga from 'redux-form-saga';

export default function* rootSaga() {
  yield all([
    // watchUserSaga(),
    // watchPaymentSaga(),
    // watchProductSaga(),
    //watchCartSaga(),
    //watchLoginSaga(),
    // watchSignUpFormSaga(),
    // watchForgotPasswordFormSaga(),
    // watchResetPasswordFormSaga(),
    // watchVerifyEmailSaga(),
    // watchNewAddressFormSaga(),
    // watchUserInfoFormSaga(),
    // formActionSaga()
    //watchPricingSaga(),
    //watchSearchShipQSaga()
  ]);
}
