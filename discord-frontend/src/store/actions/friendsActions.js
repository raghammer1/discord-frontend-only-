import { openAlertMessage } from './AlertActions';
import * as api from '../../api';

export const friendsActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
  };
};

export const setPendingFriendsInvitation = (pendingFriendsInvitations) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitations,
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends,
  };
};

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const res = await api.sendFriendInvitation(data);

    if (res.e) {
      dispatch(openAlertMessage(res.e?.response?.data));
    } else {
      dispatch(openAlertMessage(res.data));
      closeDialogHandler();
    }
  };
};

const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const res = await api.rejectFriendInvitation(data);

    if (res.error) {
      dispatch(openAlertMessage(res.e?.response?.data));
      console.log(res.e, 'this is me err');
    } else {
      console.log('this is the res', res);
      dispatch(openAlertMessage('Invitation rejected'));
    }
  };
};

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const res = await api.acceptFriendInvitation(data);

    if (res.error) {
      dispatch(openAlertMessage(res.e?.response?.data));
      console.log(res.e, 'this is me err');
    } else {
      console.log('this is the res', res);
      dispatch(openAlertMessage('Invitation accepted'));
    }
  };
};
