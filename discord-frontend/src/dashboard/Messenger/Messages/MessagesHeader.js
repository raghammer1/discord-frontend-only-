import { Typography, styled } from '@mui/material';
import Avatar from '../../../shared/components/Avatar';

const MainContainer = styled('div')({
  width: '98%',
  display: 'flex',
  flexDirection: 'row',
  marginTop: '40px',
  marginLeft: '40px',
});

const MessagesHeader = ({ name = '' }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <div style={{ marginLeft: '30px' }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: 'white',
            marginLeft: '5px',
            marginRight: '5px',
            marginTop: '3px',
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            marginRight: '5px',
            marginLeft: '5px',
            color: '#b9bbbe',
            marginTop: '3px',
          }}
        >
          You can chat with {name} here!
        </Typography>
      </div>
    </MainContainer>
  );
};
export default MessagesHeader;
