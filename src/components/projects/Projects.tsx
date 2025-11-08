import { Box, Container, Typography, Card, CardContent, CardActions, Grid, Chip, Button, Stack } from '@mui/material';
import { GitHub as GithubIcon, OpenInNew as ExternalLinkIcon } from '@mui/icons-material';
import './Projects.css';

const projects = [
  {
    name: "Jamming Playlists",
    description: "This is a playlist web app (similar to Spotify) that uses Spotify's api. The intention of this project is to practice using React/TypeScript while developing a portfolio project.",
    stack: ["React", "TypeScript"],
    githubUrl: "https://github.com/cjp0421/jammming2024",
    demoUrl: "https://cjpsjammming2024.surge.sh/",
  },
  {
    name: "Reading List",
    description: "This project uses React, Vite, Material UI, Go, PostgresSQL, and Docker to create an app that tracks the reading list of the user.",
    stack: ["React", "Go", "SQL","Vite","Docker"],
    githubUrl: "https://github.com/cjp0421/readinglist",
  },
  {
    name: "AI File Management System",
    description: "Command line Python program that connects to Gemini's API. Core functionalities include file system interaction, code execution, and task management.",
    stack: ["Python", "Gemini API"],
    githubUrl: "https://github.com/cjp0421/aiAgent",
  },
  {
    name: "Certified Scrum Product Owner®",
    description: "This badge demonstrates my completion of the CSPO certification course.",
    stack: ["Agile", "Product Management", "Backlog Management", "Product Discovery"],
    demoUrl: "https://bcert.me/bc/html/show-badge.html?b=jhsyfbrl"
  },
  {
    name: "Getting Started with Google Classroom",
    description: "This technical document is designed to be used by K-12 educators. It outlines the first four steps of setting up a Google Classroom for students.",
    stack: ["HTML/CSS", "Video Creation", "Technical Writing", "Training"],
    githubUrl: "https://codepen.io/pedersencarol1/pen/rNWMaEq",
    demoUrl: "https://codepen.io/pedersencarol1/full/rNWMaEq"
  },
  {
    name: "The Uses of SAMR",
    description: "This is a professional development course designed as an introduction to SAMR for K-12 educators. SAMR is a framework for developing and assessing 21st-century learning experiences.",
    stack: ["Articulate Rise 360", "Instructional Design", "Technical Writing", "Training"],
    demoUrl: "https://storage.googleapis.com/1samrbucket/content/index.html#/"
  },
];

export function Projects() {
  return (
    <Box component="section" 
      id="Projects" 
      sx={{ px: 3, py: 10 }}
      >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          className="neon-purple" 
          align="center" 
          sx={{ mb: 6 }}
          >
          Projects
        </Typography>
        <Grid container spacing={3}>
          {projects.map((project) => (
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
