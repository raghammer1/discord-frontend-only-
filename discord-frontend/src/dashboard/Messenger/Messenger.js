import { styled } from '@mui/material';
import { connect } from 'react-redux';
import WelcomeMessage from './WelcomeMessage';
import MessengerContent from './MessengerContent';

const MainContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '48px',
  backgroundColor: '#36393F',
  flexGrow: 1,
});

const Messenger = ({ chosenChatDetails }) => {
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chosenChatDetails={chosenChatDetails} />
      )}
    </MainContainer>
  );
};

const mapStoreToProps = (store) => {
  return {
    ...store.chat,
  };
};
export default connect(mapStoreToProps, null)(Messenger);
