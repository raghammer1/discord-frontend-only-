import { styled } from '@mui/material';
import { useState } from 'react';
import { connect } from 'react-redux';
import { sendDirectMessage } from '../../realtimeCommunication/SocketConnection';

const MainContainer = styled('div')({
  width: '100%',
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Input = styled('input')({
  backgroundColor: '#2f3136',
  color: 'white',
  height: '44px',
  width: '95%',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  padding: '0 10px',
});

const NewMessagesInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState('');

  const handleMessageValueChange = (e) => {
    const val = e.target.value;
    setMessage(val);
  };

  const handleKeyPressed = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails.id,
        content: message,
      });
    }
    setMessage('');
  };

  return (
    <MainContainer>
      <Input
        placeholder={`Write message to ${chosenChatDetails.name}`}
        value={message}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </MainContainer>
  );
};

const mapStateToStore = ({ chat }) => {
  return { ...chat };
};
export default connect(mapStateToStore, null)(NewMessagesInput);
