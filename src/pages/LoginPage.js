import { styled } from '@mui/material/styles';
import { Container, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
// sections
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { login } from 'src/services/Auth';
import { updateLocalAccessToken } from 'src/services/Token';
import Iconify from 'src/components/iconify/Iconify';
import { LoadingButton } from '@mui/lab';
import Page from 'src/components/Page';
import 'react-toastify/dist/ReactToastify.css';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const StyledContent = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const mdUp = useResponsive('up', 'md');
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = async () => {
    try {
      const loginRes = await login(email, password);
      updateLocalAccessToken(loginRes?.data?.data.access_token);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      toast(err.response.data.data, { autoClose: 2000, position: toast.POSITION.TOP_RIGHT, type: 'error' });
    }
  };

  return (
    <Page title="Login">
      <StyledRoot>
        <Logo
          sx={{
            position: 'fixed',
            top: { xs: 16, sm: 24, md: 40 },
            left: { xs: 16, sm: 24, md: 40 },
          }}
        />
        {mdUp && (
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back!
            </Typography>
            <img src="/assets/illustrations/illustration_login.png" alt="login" />
          </StyledSection>
        )}
        <Container maxWidth="sm">
          <StyledContent>
            <Typography variant="h3" gutterBottom sx={{ marginBottom: 3 }}>
              Login
            </Typography>

            <Stack spacing={3} sx={{ my: 3 }}>
              <TextField name="email" label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />

              <TextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Stack>
            <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
              Login
            </LoadingButton>
          </StyledContent>
          <ToastContainer />
        </Container>
      </StyledRoot>
    </Page>
  );
}
