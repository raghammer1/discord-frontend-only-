import { Button } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';

const MainPageButton = () => {
  return (
    <Button
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '9px',
        padding: '0',
        minWidth: '0',
        margin: '0',
        color: 'white',
        marginTop: '10px',
        backgroundColor: '#5065f2',
      }}
    >
      <GroupsIcon />
    </Button>
  );
};
export default MainPageButton;
