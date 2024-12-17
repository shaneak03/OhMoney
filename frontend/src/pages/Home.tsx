
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/addfriends");
  }

  return (
    <Box
      id="hero"
      sx={() => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',    
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            Settle Debts
          </Typography>
          <AttachMoneyRoundedIcon fontSize='large'/>
          <Typography
            sx={{
              textAlign: 'center',
              color: 'text.secondary',
              width: { sm: '100%', md: '80%' },
            }}
          >
            Welcome to OhMoney, the website that allows you to keep track and simplies the debts between you and your friends. Get started by adding your friends! 
          </Typography>
          <Stack
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{ backgroundColor: 'black', 
                    color: 'white', 
                    minWidth: 'fit-content' }}
              onClick={handleClick}
            >
              Start now
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Home;