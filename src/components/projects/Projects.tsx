import { Box, Container, Typography, Card, CardContent, CardActions, Grid, Chip, Button, Stack, Tooltip } from '@mui/material';
import { GitHub as GithubIcon, OpenInNew as ExternalLinkIcon } from '@mui/icons-material';
import { PROJECTS } from './projects_data';
import './Projects.css';
import { useState } from 'react';

export function Projects() {
  const filters = ['All', ...new Set(PROJECTS.flatMap(project => project.stack))];
  const [activeFilter, setActiveFilter] = useState('All');

  const handleChipClick = (filter: string) => {
    setActiveFilter(filter)
  }

  const filteredProjects = activeFilter === 'All' ? PROJECTS : PROJECTS.filter((project) => project.stack.includes(activeFilter))

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
        <Stack
          direction="row"
          spacing={1}
          sx={{
            mb: 3,
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            rowGap: 1
          }}
        >
          {filters.map((filter: string) => (
            <Tooltip key={filter} title="Click to filter projects">
              <Chip
                label={filter}
                clickable
                className='neon-purple-soft-filter-chip'
                sx={{
                  backgroundColor: filter === activeFilter ? "#000" : "#fff",
                  color: filter === activeFilter ? "#fff" : "#000"
                }}
                onClick={() => handleChipClick(filter)}
                aria-pressed={filter === activeFilter}
              />
            </Tooltip>
          ))}
        </Stack>
        <Grid container spacing={3}>
          {filteredProjects.map((project) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.name}>
              <Card
                component="article"
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
                        className='neon-purple-soft-filter-chip'
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
