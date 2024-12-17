
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import UserCard from '../components/UserCard';

function AddFriend() {
    return (
        <div
        style={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          alignItems: 'center',
          margin: '50px',  
        }}
      >
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 600, 
            justifyContent: 'center', 
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search For Friends"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <div>
          <UserCard />
        </div>

      </div>
      );
}

export default AddFriend;
