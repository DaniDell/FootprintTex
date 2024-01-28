import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

const FilterDialog = ({ open, handleClose }) => {
    const [categoria, setCategoria] = React.useState({
        categoria1: false,
        categoria2: false,
        categoria3: false,
    });

    const [compromiso, setCompromiso] = React.useState({
        compromiso1: false,
        compromiso2: false,
        compromiso3: false,
    });

    const handleCategoriaChange = (event) => {
        setCategoria({ ...categoria, [event.target.name]: event.target.checked });
    };

    const handleCompromisoChange = (event) => {
        setCompromiso({ ...compromiso, [event.target.name]: event.target.checked });
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth='sm'>
            <DialogTitle>Aquí podrás filtrar por</DialogTitle>
            <DialogContent>
                <DialogContentText>
                     
                </DialogContentText>

                <Paper elevation={3} sx={{ padding: '16px', marginBottom: '16px' }}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend" sx={{ paddingBottom: '16px', fontWeight: 'bold' }}>Tipo de actividad</FormLabel>
                        <FormControlLabel
                            control={<Checkbox checked={categoria.categoria1} onChange={handleCategoriaChange} name="categoria1" />}
                            label="Categoría 1"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={categoria.categoria2} onChange={handleCategoriaChange} name="categoria2" />}
                            label="Categoría 2"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={categoria.categoria3} onChange={handleCategoriaChange} name="categoria3" />}
                            label="Categoría 3"
                        />
                    </FormControl>
                </Paper>

                <Paper elevation={3} sx={{ padding: '16px' }}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"sx={{ paddingBottom: '16px', fontWeight: 'bold' }}>ODS trabajados</FormLabel>
                        <FormControlLabel
                            control={<Checkbox checked={compromiso.compromiso1} onChange={handleCompromisoChange} name="compromiso1" />}
                            label="Compromiso 1"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={compromiso.compromiso2} onChange={handleCompromisoChange} name="compromiso2" />}
                            label="Compromiso 2"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={compromiso.compromiso3} onChange={handleCompromisoChange} name="compromiso3" />}
                            label="Compromiso 3"
                        />
                    </FormControl>
                </Paper>
                <p>Todavia en desarrollo, solo ilustrativo</p>
            </DialogContent>
            <DialogActions>
                
                
                <Button onClick={handleClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default FilterDialog;