import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { GitHub as GithubIcon, LinkedIn as LinkedinIcon, Email as MailIcon } from '@mui/icons-material';

export function Contact() {
  return (
    <Box component="section" sx={{ px: 3, py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" sx={{ mb: 2, color: 'text.primary' }}>
            Contact Me
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '800px', mx: 'auto', color: 'text.primary' }}>
            Let's talk about thoughtful systems, learning, or product design.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
          >
            <Button
              variant="outlined"
              startIcon={<GithubIcon />}
              href="https://github.com/cjp0421"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              startIcon={<LinkedinIcon />}
              href="https://www.linkedin.com/in/carol-joy-pedersen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              startIcon={<MailIcon />}
              href="mailto:pedersencarol1@gmail.com"
            >
              Email
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
