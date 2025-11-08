import { Box, Typography, Container } from '@mui/material';
import './Hero.css';

export function Hero() {
  return (
    <Box
      component="section"
      id="Home"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        px: 3,
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          align="center"
          className="neon-text"
          sx={{ mb: 3 }}
        >
          Carol Pedersen
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{ mb: 4, color: 'text.secondary' }}
        >
          developer · product thinker · educator
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ color: 'text.secondary', maxWidth: '800px', mx: 'auto', fontSize: '18px' }}
        >
          Building systems and stories that empower people and deliver results.
        </Typography>
      </Container>
    </Box>
  );
}
