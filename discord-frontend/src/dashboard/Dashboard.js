import { styled } from '@mui/material';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import AppBar from './AppBar/AppBar';
import { useEffect } from 'react';
import { logout } from '../shared/utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../store/actions/authActions';
import { connectWithSocketServer } from '../realtimeCommunication/SocketConnection';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const Dashboard = ({ setUserDetails }) => {
  // useEffect(() => {
  //   const userDetails = localStorage.getItem('user');

  //   if (!userDetails) logout();
  //   else {
  //     setUserDetails(JSON.parse(userDetails));
  //   }
  // }, [setUserDetails]);
  useEffect(() => {
    const userDetails = localStorage.getItem('user');

    if (!userDetails) {
      logout();
    } else {
      try {
        setUserDetails(JSON.parse(userDetails));
        connectWithSocketServer(JSON.parse(userDetails));
      } catch (error) {
        console.error('Error parsing user details:', error);
        logout(); // In case of parsing error
      }
    }
  }, [setUserDetails]);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(Dashboard);
