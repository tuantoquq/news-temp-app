import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Stack, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import { login } from 'src/services/Auth';
import { updateLocalAccessToken } from 'src/services/Token';
import Iconify from '../../../components/iconify';
import { ToastContainer, toast } from 'react-toastify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const toastOptions = {
    autoClose: 3000,
    position: toast.POSITION.TOP_RIGHT,
  };

  const handleClick = async () => {
    try {
      const loginRes = await login(email, password);
      console.log(loginRes);
      updateLocalAccessToken(loginRes?.data?.data.access_token);
      toast.success('Login successfully!', toastOptions);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      toast.error(err.response.data.data, toastOptions);
    }
  };

  return (
    <>
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
      <ToastContainer />
    </>
  );
}
