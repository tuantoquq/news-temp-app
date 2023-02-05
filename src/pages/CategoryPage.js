// @mui
import { Container, Typography } from '@mui/material';
// mock
import Page from 'src/components/Page';

// ----------------------------------------------------------------------
export default function CategoryPage() {
  return (
    <Page title="Category">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Categories
        </Typography>
      </Container>
    </Page>
  );
}
