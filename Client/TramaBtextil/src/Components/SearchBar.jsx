import React from 'react';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const RoundedTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 50,
  },
});

const SearchBar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box display="flex" justifyContent="flex-end" sx={{ margin: 2, gap:1 }}>
            <RoundedTextField
                id="search"
                label="Buscar"
                variant="outlined"
                size="small"
                sx={{  
                    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)', 
                    borderRadius: '50px',
                    maxWidth: '200px'
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            
            <IconButton  
                sx={{ 
                    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)', 
                    backgroundColor: '#4a4a46', 
                    color: 'white' 
                }}
                onClick={handleClickOpen}
            >
                <FilterAltIcon />
            </IconButton>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Filtrar por</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Selecciona las categorías y ODS que deseas filtrar.
                    </DialogContentText>
                    // Aquí puedes agregar tus opciones de filtrado
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button onClick={handleClose}>Aplicar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default SearchBar;