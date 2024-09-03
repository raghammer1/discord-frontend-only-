import { styled } from '@mui/material';
import PendingInvitationsListItem from './PendingInvitationsListItem';
import { connect } from 'react-redux';

// const DUMMY_INVITATION = [
//   {
//     _id: '1',
//     senderId: {
//       username: 'deepika',
//       mail: 'deepika@gmail.com',
//     },
//   },
//   {
//     _id: '2',
//     senderId: {
//       username: 'Sophia',
//       mail: 'sophia@gmail.com',
//     },
//   },
//   {
//     _id: '3',
//     senderId: {
//       username: 'samriddhi',
//       mail: 'samriddhi@gmail.com',
//     },
//   },
//   {
//     _id: '4',
//     senderId: {
//       username: 'mona',
//       mail: 'mona@gmail.com',
//     },
//   },
// ];

const MainContainer = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  overflow: 'auto',
  alignItems: 'centers',
  flexDirection: 'column',
});

const PendingInvitationsList = ({ pendingFriendsInvitations }) => {
  console.log('FUCK ', pendingFriendsInvitations);
  return (
    <MainContainer>
      {pendingFriendsInvitations.map((i) => (
        <PendingInvitationsListItem
          key={i._id}
          id={i._id}
          username={i.senderId.username}
          mail={i.senderId.mail}
        />
      ))}
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ friends }) => {
  return { ...friends };
};
export default connect(mapStoreStateToProps, null)(PendingInvitationsList);
