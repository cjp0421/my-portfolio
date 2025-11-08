import { AppBar, Toolbar, IconButton, Typography, Box, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'Capabilities', 'Projects', 'Contact'];

export default function NavBar() {
    return (
        <header>
        {/*https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer*/}
        <AppBar component="nav">
          <Toolbar
          sx={{
            backgroundColor: '#000'
          }}
          >
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Carol Pedersen
          </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button href={`#${item}`} key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
          </Toolbar>
        </AppBar>
      </header>
    )
}