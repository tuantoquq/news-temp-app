import { Button, Container, Stack, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// mock
import Page from 'src/components/Page';

// ----------------------------------------------------------------------

export default function ArticlePage() {
  return (
    <Page title="Article">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Articles
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
            New Article
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}
