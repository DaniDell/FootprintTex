import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const pages = [
  { text: "🕸️ Sumar mi proyecto", path: "/iniciar-sesion" },
  { text: "🤝 Quienes somos", path: "/nosotros" },
  { text: "📨 Sugerencias", path: "/retroalimentacion" },
  { text: "🧮 Probar Demo calculadora", path: "/" },
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

  const handleUserChoice = () => {
    const swalWithCustomButtons = Swal.mixin({
      customClass: {
        confirmButton: "confirm-button-class",
        denyButton: "deny-button-class",
        cancelButton: "cancel-button-class",
      },
      buttonsStyling: false,
      showCancelButton: true,
    });

    swalWithCustomButtons
      .fire({
        title: "Todavía no estás logeado",
        text: "Elige una opción a continuación:",
        confirmButtonText: "Registrarse por primera vez",
        cancelButtonText: "Iniciar sesión con mi cuenta",
      })
      .then((result) => {
        if (result.isConfirmed) {
          // Redirige al usuario a la página de registro
          navigate("/registro");
        } else if (result.isDismissed) {
          // Redirige al usuario a la página de inicio de sesión
          navigate("/iniciar-sesion");
        }
      });

    // Añade los estilos después de que se haya mostrado el SweetAlert
    const buttons = document.querySelectorAll('.swal2-confirm, .swal2-cancel');
    buttons.forEach(button => {
      button.style.fontFamily = 'Poppins, sans-serif';
      button.style.border = 'none';
      button.style.padding = '12px';
    });
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton style={{ marginLeft: '0px', padding: '1px' }}
              size="large"
              aria-label="account of current user"
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
                display: { xs: "block", md: "none" },
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

          <Link to="/home">
            <img
              src="/logo.svg"
              alt="Logo Trama B Textil"
              style={{
                display: { xs: "flex", md: "none" },
                marginRight: "8px",
                height: "40px",
                width: "40px",
              }}
            />
          </Link>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 100,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Trama B Textil
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.text}
                component={Link}
                to={page.path}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
                <Avatar alt="" src={user ? "  " : ""} />
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
    </AppBar>
  );
}

export default Navbar;
