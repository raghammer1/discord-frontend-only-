import { Typography } from '@mui/material';
import { connect } from 'react-redux';

const ChosenOptionLabel = ({ chosenChatDetails }) => {
  console.log('DUMBEREE', chosenChatDetails);
  return (
    <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: 'bold' }}>
      {chosenChatDetails?.name
        ? `Chatting with: ${chosenChatDetails?.name}`
        : ''}
    </Typography>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return { ...chat };
};

export default connect(mapStoreStateToProps, null)(ChosenOptionLabel);
