import { styled } from '@mui/material';
import { useEffect } from 'react';
import Messages from './Messages/Messages';
import NewMessagesInput from './NewMessagesInput';
import { getDirectChatHistory } from '../../realtimeCommunication/SocketConnection';

const Wrapper = styled('div')({
  flexGrow: '1',
});
const MessengerContent = ({ chosenChatDetails }) => {
  // responsible for fetching chat history for the userId
  useEffect(() => {
    // fetching chat history from specified userID
    console.log('HERE');
    getDirectChatHistory({ receiverUserId: chosenChatDetails.id });
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages /> <NewMessagesInput />
    </Wrapper>
  );
};
export default MessengerContent;
