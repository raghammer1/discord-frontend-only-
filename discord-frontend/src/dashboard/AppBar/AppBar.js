import { styled } from '@mui/material';
import DropdownMenu from './DropdownMenu';
import ChosenOptionLabel from './ChosenOptionLabel';

const MainContainer = styled('div')({
  display: 'flex',
  position: 'absolute',
  height: '48px',
  borderBottom: '1px solid black',
  right: '0',
  top: '0',
  width: 'calc(100% - 326px)',
  backgroundColor: '#36393f',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
});

const AppBar = () => {
  return (
    <MainContainer>
      <ChosenOptionLabel />
      <DropdownMenu />
    </MainContainer>
  );
};
export default AppBar;
