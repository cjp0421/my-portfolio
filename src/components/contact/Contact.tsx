import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { GitHub as GithubIcon, LinkedIn as LinkedinIcon, Email as MailIcon } from '@mui/icons-material';
import './Contact.css';

export function Contact() {
  return (
    <Box component="section" id="Contact" sx={{ px: 3, py: 10 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h2" className="neon-emerald" sx={{ mb: 2 }}>
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
              sx={{
                backgroundColor: 'black',
                color: 'white'
              }}
              startIcon={<GithubIcon />}
              href="https://github.com/cjp0421"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: 'black',
                color: 'white'
              }}
              startIcon={<LinkedinIcon />}
              href="https://www.linkedin.com/in/carol-joy-pedersen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: 'black',
                color: 'white'
              }}
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
