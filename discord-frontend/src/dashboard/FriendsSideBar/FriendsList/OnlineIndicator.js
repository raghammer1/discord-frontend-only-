import { Box } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: '#3b8553',
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        right: '5px',
      }}
    >
      <FiberManualRecordIcon />
    </Box>
  );
};
export default OnlineIndicator;
