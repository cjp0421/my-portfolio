import { AppBar, Toolbar, IconButton, Typography, Box, Button, Divider, List, ListItem, ListItemButton, ListItemText, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const navItems = ['Home', 'Capabilities', 'Projects', 'Contact'];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ m: 2 }}>
        Carol Pedersen
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton href={`#${item}`} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header>
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
            onClick={handleDrawerToggle}
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
      <nav aria-label="mobile navigation">
        <Drawer
          variant="temporary"
          aria-label="mobile navigation"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: "150px" },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </header>
  )
}