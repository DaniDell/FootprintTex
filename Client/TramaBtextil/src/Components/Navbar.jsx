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
import { useTheme } from '@mui/material/styles';

const pages = [
  { text: "🧮 Probar Demo calculadora", path: "/calculadora" },
 // { text: "🕸️ Red de proyectos alineados", path: "/home" },
 // { text: "🤚 Sumar mi proyecto", path: "/iniciar-sesion" },
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
  const theme = useTheme();
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
  if (option === "register") {
    window.location.href = "https://docs.google.com/forms/d/1-hE4D2OTIx7QY-lo98m_69NQtqIQyxht5oaV9RHzXFk/viewform?edit_requested=true/viewform?edit_requested=true";
  } else if (option === "login") {
    window.location.href = "https://linktr.ee/tramabtextil";
  }
};

  const handleUserChoice = () => {
    handleOpenDialog();
  };

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ height: "4rem", backgroundColor: "transparent" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <IconButton
                style={{ marginLeft: "0px", padding: "0px" }}
                size="large"
                aria-label="cuenta del usuario actual"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
            <MenuIcon sx={{ fontSize: '30px', color: theme.palette.text.primary }} />
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

            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
            ></Box>

            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
   
                <IconButton
                  style={{ marginRight: "0px" }}
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
                  <Link to="/">
                <img
                  src="/logo.png"
                  alt="Logo Trama B Textil"
                  style={{
                    height: "60px",
                   paddingTop: "6px",
                  }}
                />
              </Link>
                </IconButton>
   
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
          title="Conoce más sobre Trama B Textil"
          content="Seguinos en nuestras redes sociales para estar al tanto de las últimas novedades y eventos. También podés completar una encuestra para recibir información exclusiva y participar en la red de proyectos alineados."
          confirmText="Participa de una encuesta rápida"
          cancelText="Seguinos en redes"
          onConfirm={() => handleCloseDialog("register")}
          onCancel={() => handleCloseDialog("login")}
        />
      </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;
