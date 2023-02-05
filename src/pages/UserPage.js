import { Stack, Button, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// mock
import Page from 'src/components/Page';
import { useEffect, useState } from 'react';
import { getAllUser } from 'src/services/User';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'phone', label: 'Phone', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'address', label: 'Address', alignRight: false },
  { id: 'createAt', label: 'Time Create', alignRight: false },
  { id: '' },
];

export default function UserPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUser()
      .then((res) => {
        setUsers(res?.data.data.user_list);
      })
      .catch((error) => {
        console.log(error);
        setUsers([]);
      });
  });
  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Users
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}
