import * as api from '../../api';
import { openAlertMessage } from './AlertActions';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
  };
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

const login = (userDetails, history) => {
  return async (dispatch) => {
    const res = await api.login(userDetails);

    if (res.e) {
      // show error message
      dispatch(openAlertMessage(res?.e?.response?.data));
      console.log(res.e, 'this is me err');
    } else {
      const userDetails = res?.data;
      console.log(userDetails, res?.data);
      localStorage.setItem('user', JSON.stringify(userDetails));
      console.log('I AM HERE AND HAVE SAVED THE LS');

      dispatch(setUserDetails(userDetails));
      history('/dashboard');
    }
  };
};

const register = (userDetails, history) => {
  return async (dispatch) => {
    const res = await api.register(userDetails);

    if (res.e) {
      // show error message
      console.log(res.e);
      dispatch(openAlertMessage(res?.e?.response?.data));
    } else {
      const userDetails = res?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      history('/dashboard');
    }
  };
};
