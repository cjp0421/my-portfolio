import { Box, Container, Typography, Card, CardContent, CardActions, Grid, Chip, Button, Stack } from '@mui/material';
import { GitHub as GithubIcon, OpenInNew as ExternalLinkIcon } from '@mui/icons-material';
import { PROJECTS } from './projects_data';
import './Projects.css';

export function Projects() {
  return (
    <Box component="section" 
      id="Projects" 
      sx={{ px: 2, py: 10 }}
      >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          className="neon-purple"
          align="center" 
          sx={{ 
            mb: 6, 
            fontSize: {
              xs: '3rem',
              md: '6rem',
            }
          }}
          >
          Projects
        </Typography>
        <Grid container spacing={3}>
          {PROJECTS.map((project) => (
            <Grid size={{xs: 12, md: 6, lg: 4}} key={project.name}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                variant="outlined"
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {project.stack.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        variant="filled"
                        className='neon-purple-soft'
                        sx={{ mb: 1, backgroundColor: "#fff" }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  {project.githubUrl && (
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<GithubIcon />}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        flex: 1,
                        backgroundColor: 'black',
                        color: 'white'
                      }}
                    >
                      GitHub
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={<ExternalLinkIcon />}
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        flex: 1,
                        backgroundColor: 'black',
                        color: 'white'
                      }}
                    >
                      Demo
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
