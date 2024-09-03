import { useEffect, useState } from 'react';
import { validateMail } from '../../shared/utils/validators';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from '@mui/material';
import InputWithLabels from '../../shared/components/InputWithLabels';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/friendsActions';

const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  sendFriendInvitation,
}) => {
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitations = () => {
    // Add logic for friend reqeusts
    sendFriendInvitation({ targetMailAddress: mail }, closeDialogHandler);
  };

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail('');
  };

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>Invite a Friend</Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>
              Enter email of friend which you would like to invite
            </Typography>
          </DialogContentText>
          <InputWithLabels
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter email address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitations}
            disabled={!isFormValid}
            label="Send"
            additionalStyle={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(AddFriendDialog);
