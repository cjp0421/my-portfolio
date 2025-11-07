import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import "./Capabilities.css";

import { CAPABILITIES } from './capabilities_data';

export function Capabilities() {
  return (
    <Box component="section" sx={{ px: 3, py: 10 }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          className='neon-blue'
          sx={{ mb: 6 }}
          >
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
                    <Box sx={{
                      display: "flex",
                      mb: 2
                    }}>
                      <Icon className="neon-blue-icon" sx={{ fontSize: 40, mx: 2 }} />
                      <Typography variant="h6" component="h3" gutterBottom sx={{
                        mt: .5
                      }}>
                        {capability.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 3.5, mr: 2.5 }}>
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