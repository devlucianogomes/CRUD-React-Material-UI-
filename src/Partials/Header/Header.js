import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  // History, para redirect de rotas
  const history = useHistory();
  // State menu
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (route) => {
    handleToggleMenu();
    history.push(route);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            onClick={() => handleToggleMenu()}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-stoque
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>
          <ListItem button onClick={() => handleMenuClick("/")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Página Inicial</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick("/customers")}>
            <ListItemIcon>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText>Clientes</ListItemText>
          </ListItem>
          <ListItem button onClick={() => handleMenuClick("/customers/add")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Cadastrar Clientes</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
