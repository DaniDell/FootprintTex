import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { CustomAccordion } from '../Utils/FilterExpand';
import { Autocomplete, TextField } from '@mui/material';

const FilterDialog = ({ open, handleClose }) => {

    const [checkboxGroupValues, setCheckboxGroupValues] = React.useState([]);

     
    
    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    const handleCompromisoChange = (event) => {
        setCompromiso(event.target.value);
    };

    const handleCheckboxGroupChange = (event) => {
        if (event.target.checked) {
            setCheckboxGroupValues([...checkboxGroupValues, event.target.value]);
        } else {
            setCheckboxGroupValues(checkboxGroupValues.filter(value => value !== event.target.value));
        }
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                style: { borderRadius: 20 },
            }}
        >
            <DialogTitle sx={{ fontStyle: "" }} >Aquí podrás filtrar por</DialogTitle>
            <DialogContent>
                <DialogContentText></DialogContentText>
                <FormControl component="fieldset">
                    <CustomAccordion
                        summaryLabel="Oferta del proyecto"
                        checkboxGroupValues={checkboxGroupValues}
                        checkboxGroupChangeHandler={handleCheckboxGroupChange}
                        formControlLabels={[
                            { value: 'manufactura', label: 'Taller de producción textil' },
                            { value: 'materia-prima', label: 'Proveedor de materia prima' },
                            { value: 'gestion-descartes', label: 'Gestión de descartes textiles' },
                            { value: 'marketing', label: 'Servicios de diseño y marketing' },
                            { value: 'productos', label: 'Marca comercial' },
                        ]}
                    />
                    <CustomAccordion
                        summaryLabel="Compromisos con ODS"
                        checkboxGroupValues={checkboxGroupValues}
                        checkboxGroupChangeHandler={handleCheckboxGroupChange}
                        formControlLabels={[
                            { value: '4', label: 'ODS 4: Educación de calidad' },
                            { value: '5', label: 'ODS 5: Igualdad de género' },
                            { value: '6', label: 'ODS 6: Agua limpia y saneamiento' },
                            { value: '7', label: 'ODS 7: Energía asequible y no contaminante' },
                            { value: '8', label: 'ODS 8: Trabajo decente y crecimiento económico' },
                            { value: '10', label: 'ODS 10: Reducción de las desigualdades' },
                            { value: '12', label: 'ODS 12: Producción y consumo responsables' },
                            { value: '13', label: 'ODS 13: Acción por el clima' },
                            { value: '17', label: 'ODS 17: Alianzas para lograr los objetivos' },
                        ]}
                    />
                </FormControl>
                <p>
                🚧 Todavia en desarrollo, solo ilustrativo.
                </p>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cerrar</Button>
            </DialogActions>
        </Dialog>
    );
};

export default FilterDialog;