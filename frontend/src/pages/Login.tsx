import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const providers = [{ id: 'credentials', name: 'Credentials' }];
// preview-start
const BRANDING = {
  logo: (
    <img
      src="https://media.istockphoto.com/id/1151557689/vector/vector-image-of-a-flat-isolated-icon-dollar-sign-currency-exchange-dollar-united-states.jpg?s=612x612&w=0&k=20&c=XxoU_vrc2LCsrlRnmZHysq6HG_tBIUsPVVxi0VeTCKA="
      alt="logo"
      style={{ height: 24 }}
    />
  ),
  title: 'OhMoney',
};
// preview-end

const signIn: (provider: AuthProvider) => void = async (provider) => {
  const promise = new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

interface LoginProps {
  updateLoggedIn: () => void;
}

function Login({ updateLoggedIn }: LoginProps) {
  const theme = useTheme();
  const navigate = useNavigate()

  function handleLoginClick() {
    updateLoggedIn();
    navigate("/"); 
  };

  return (
    <>
      <button onClick={handleLoginClick}>Toggle Log In</button>
      <AppProvider branding={BRANDING} theme={theme}>
        <SignInPage
          signIn={signIn}
          providers={providers}
          slotProps={{ emailField: { autoFocus: false } }}
        />
      </AppProvider>
      </>
    );
}

export default Login;
