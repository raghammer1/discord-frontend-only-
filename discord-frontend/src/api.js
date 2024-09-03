import axios from 'axios';
import { logout } from './shared/utils/auth';

const apiClient = axios.create({
  baseURL: 'http://localhost:5002/api',
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user'); // Retrieve user details from localStorage
    if (userDetails) {
      try {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
      } catch (err) {
        console.log(err);
      }
    }

    console.log(config, 'CAMER HERRE LOL');
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// public routes

export const login = async (data) => {
  console.log(data);
  try {
    return await apiClient.post('/auth/login', data);
  } catch (e) {
    return { error: true, e };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (e) {
    return { error: true, e };
  }
};

// after login or register now are secured routes

export const sendFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friend-invitation/invite', data);
  } catch (e) {
    checkResponseCode(e);
    return {
      error: true,
      e,
    };
  }
};

export const acceptFriendInvitation = async (data) => {
  try {
    console.log('came here');
    return await apiClient.post('/friend-invitation/accept', data);
  } catch (e) {
    console.log('came here and here');
    checkResponseCode(e);
    return {
      error: true,
      e,
    };
  }
};

export const rejectFriendInvitation = async (data) => {
  try {
    return await apiClient.post('/friend-invitation/reject', data);
  } catch (e) {
    checkResponseCode(e);
    return {
      error: true,
      e,
    };
  }
};

// WE ARE CHECKING THIS AS THIS WILL TELL US IF THE ROUTE THAT IS BEING ACCESSED BY THE USER
// IS BEING DONE WHEN THEY HAVE A VALID TOKEN ELSE THEY WON'T BE ABLE TO ACCESS THE PATH
const checkResponseCode = (exception) => {
  const responseCode = exception?.response?.status;

  if (responseCode) (responseCode === 401 || responseCode === 403) && logout();
};
