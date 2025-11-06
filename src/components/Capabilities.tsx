import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';

import { CAPABILITIES } from '../capabilities';

export function Capabilities() {
  return (
    <Box component="section" sx={{ px: 3, py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6, color: 'text.primary' }}>
          Capabilities
        </Typography>
        <Grid container spacing={3}>
          {CAPABILITIES.map((capability) => {
            const Icon = capability.icon;
            return (
              <Grid size={{
                xs: 12,
                md: 6,
                lg: 4
              }} key={capability.title}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'border-color 0.3s',
                    '&:hover': {
                      borderColor: 'primary.main',
                    },
                  }}
                  variant="outlined"
                >
                  <CardContent>
                    <Icon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h6" component="h3" gutterBottom>
                      {capability.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {capability.blurb}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}