import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/reducers/authReducer';
import alertReducer from '../store/reducers/AlertReducer';
import friendsReducer from '../store/reducers/friendsReducer';
import chatReducer from './reducers/chatReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friends: friendsReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
