import { Typography, styled } from '@mui/material';
import Avatar from '../../../shared/components/Avatar';
import { connect } from 'react-redux';

const MainContainer = styled('div')({
  width: '97%',
  display: 'flex',
  marginTop: '10px',
});

const AvatarContainer = styled('div')({
  width: '70px',
});

const MessageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const MessageContent = styled('div')({
  color: '#DCDDDE',
});

const SameAuthorMessageContent = styled('div')({
  width: '97%',
  color: '#DCDDDE',
});

const SameAuthorMessageText = styled('span')({
  marginLeft: '70px',
});

const Message = ({
  content,
  username,
  sameAuthor,
  date,
  sameDay,
  userDetails,
}) => {
  if (sameAuthor && sameDay) {
    return (
      <SameAuthorMessageContent>
        <SameAuthorMessageText>{content}</SameAuthorMessageText>
      </SameAuthorMessageContent>
    );
  }
  if (userDetails.username.toLowerCase() === username.toLowerCase()) {
    return (
      <MainContainer sx={{ alignItems: 'left', justifyContent: 'left' }}>
        <AvatarContainer>
          <Avatar username={username} />
        </AvatarContainer>
        <MessageContainer>
          <Typography
            sx={{ fontSize: '16px', color: 'white', fontWeight: 'bold' }}
          >
            {/* {username}{' '} */}
            <span style={{ fontSize: '12px', color: '#72767D' }}>{date}</span>
          </Typography>
          <MessageContent>{content}</MessageContent>
        </MessageContainer>
      </MainContainer>
    );
  } else {
    return (
      <MainContainer
        sx={{
          alignItems: 'right',
          justifyContent: 'right',
        }}
      >
        <MessageContainer sx={{ marginRight: '20px' }}>
          <Typography
            sx={{
              fontSize: '16px',
              color: 'white',
              alignItems: 'right',
              justifyContent: 'right',
              marginLeft: 'auto',
              fontWeight: 'bold',
            }}
          >
            {username}{' '}
            <span style={{ fontSize: '12px', color: '#72767D' }}>{date}</span>
          </Typography>
          <MessageContent>{content}</MessageContent>
        </MessageContainer>
        <AvatarContainer>
          <Avatar username={username} />
        </AvatarContainer>
      </MainContainer>
    );
  }
};

const mapStoreToProps = ({ auth }) => {
  return { ...auth };
};

export default connect(mapStoreToProps, null)(Message);
