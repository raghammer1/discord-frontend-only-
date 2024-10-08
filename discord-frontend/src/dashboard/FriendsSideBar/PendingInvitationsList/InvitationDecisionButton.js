import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';

const InvitationDecisionButton = ({
  disabled,
  rejectInvitationHandler,
  acceptInvitationHandler,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton
        style={{ color: 'white' }}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <CheckIcon />
      </IconButton>
      <IconButton
        style={{ color: 'white' }}
        disabled={disabled}
        onClick={rejectInvitationHandler}
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};
export default InvitationDecisionButton;
