import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Container,
  // Avatar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AlertDialog from "./AlertDialog";
import HideOnScroll from "../Components/Utils/HideOnScroll";


const pages = [
  { text: "🧮 Probar Demo calculadora", path: "/calculadora" },
  { text: "🕸️ Red de proyectos alineados", path: "/home" },
  { text: "🤚 Sumar mi proyecto", path: "/iniciar-sesion" },
  // { text: "🤝 Quienes somos", path: "/nosotros" },
  // { text: "📨 Sugerencias aquí", path: "/retroalimentacion" },
 
];

const settings = [
  { text: "Ver y editar mi perfil público", path: "/perfil" },
  { text: "Generar un nuevo registro gestión", path: "/recepcion" },
  { text: "Historia de gestión de materiales", path: "/historica" },
  { text: "Salir de la cuenta", path: "/" },
];

function Navbar({ user }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

 
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = (option) => {
    setOpenDialog(false);
    if (option === 'register') {
      navigate("/registro");
    } else if (option === 'login') {
      navigate("/iniciar-sesion");
    }
  };

  const handleUserChoice = () => {
    handleOpenDialog();
  };
  
  return (
    <HideOnScroll>
<AppBar position="sticky" sx={{ height: '4rem' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <IconButton style={{ marginLeft: '0px', padding: '0px' }}
              size="large"
              aria-label="cuenta del usuario actual"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: "block",
              }}
            >
              {pages.map((page, index) => (
                <MenuItem
                  key={index}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.path}
                >
                  {page.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
    <Link to="/">
      <img
        src="/logoTrama.svg"
        alt="Logo Trama B Textil"
        style={{
          height: "40px",
          width: "180px",
          paddingTop: "6px",
        }}
      />
      
    </Link>

  </Box>

          
  <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
            <Tooltip title={user ? "Abrir" : "Inicia sesión"}>
              <IconButton style={{ marginRight: '0px' }}
                onClick={(event) => {
                  if (user) {
                    handleOpenUserMenu(event);
                  } else {
                    handleUserChoice();
                  }
                }}
                sx={{ p: 0 }}
              >
                {/* <Avatar alt="" src={user ? "  " : ""} /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar-user"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting.text}
                  onClick={handleCloseUserMenu}
                  component={Link}
                  to={setting.path}
                >
                  {setting.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
        </Toolbar>
      </Container>
      <AlertDialog
      open={openDialog}
      handleClose={() => handleCloseDialog(null)}
      title="Debes logearte acceder a esta sección"
      content="Elige una opción a continuación:"
      confirmText="Registrate"
      cancelText="Inicia sesión"
      onConfirm={() => handleCloseDialog('register')}
      onCancel={() => handleCloseDialog('login')}
    />
    </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;
