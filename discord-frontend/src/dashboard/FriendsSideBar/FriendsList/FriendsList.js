import { styled } from '@mui/material';
import FriendsListItem from './FriendsListItem';
import { connect } from 'react-redux';

// const DUMMY_FRIENDS = [
//   {
//     id: '1',
//     username: 'Syna',
//     isOnline: true,
//   },
//   {
//     id: '2',
//     username: 'Shristi',
//     isOnline: true,
//   },
//   {
//     id: '3',
//     username: 'Alaina',
//     isOnline: false,
//   },
//   {
//     id: '4',
//     username: 'Anushka',
//     isOnline: false,
//   },
// ];

const MainContainer = styled('div')({
  width: '100%',
  flexGrow: 1,
});

const FriendsList = ({ friends, onlineUsers }) => {
  const checkIfOnline = (user) => {
    console.log('ONLINE USERS:', onlineUsers);
    const searchCriteria = {
      username: user.username,
      mail: user.mail,
    };
    for (let val of onlineUsers) {
      if (
        val.username === searchCriteria.username &&
        val.mail === searchCriteria.mail
      ) {
        return val.isOnline;
      }
    }
    return false;
  };

  return (
    <MainContainer>
      {friends.map((f) => (
        <FriendsListItem
          username={f.username}
          id={f.id}
          isOnline={checkIfOnline(f)}
          key={f.id}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return { ...friends };
};

export default connect(mapStoreStateToProps)(FriendsList);
