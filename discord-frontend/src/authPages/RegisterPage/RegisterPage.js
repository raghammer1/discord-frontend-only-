import { useEffect, useState } from 'react';
import AuthBox from '../../shared/components/AuthBox';
import { Typography } from '@mui/material';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api';

const RegisterPage = ({ register }) => {
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isFormValid, setIsFormValid] = useState(true);

  const history = useNavigate();

  useEffect(() => {
    setIsFormValid(validateRegisterForm({ mail, username, password }));
  }, [mail, password, username, setIsFormValid]);

  const handleRegister = () => {
    register({ mail, username, password }, history);
    console.log(mail, password);
    console.log('lo');
  };

  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: 'white' }}>
        Create an account
      </Typography>
      <RegisterPageInputs
        mail={mail}
        username={username}
        setUsername={setUsername}
        setMail={setMail}
        password={password}
        setPassword={setPassword}
      />
      <RegisterPageFooter
        isFormValid={isFormValid}
        handleRegister={handleRegister}
      />
    </AuthBox>
  );
};

const mapActionToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};

export default connect(null, mapActionToProps)(RegisterPage);
