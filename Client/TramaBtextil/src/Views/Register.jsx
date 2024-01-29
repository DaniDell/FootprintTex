import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid, Container, Autocomplete } from '@mui/material';
import AlertDialog from '../Components/AlertDialog';

const Register = () => {
    const { handleSubmit, control, register, formState: { errors } } = useForm({
        defaultValues: {
          category: []  // Establece un valor por defecto para evitar problemas con Autocomplete
        },
      });

  const [isAlertOpen, setIsAlertOpen] = useState(false); 
  const navigate = useNavigate();

    const onSubmit = data => {
        console.log(`Nombre: ${data.name}`);
        console.log(`Correo: ${data.email}`);
        console.log(`Contraseña: ${data.password}`);
        console.log(`Categorías: ${data.category.map(cat => cat.symbol).join(', ')}`);
        // Aquí puedes enviar los datos a tu API
        setIsAlertOpen(true);
    };

    const categories = [
        { symbol: "Educación", text: "educador" },
        { symbol: "Asesoramiento", text: "asesoramiento" },
        { symbol: "Diseño", text: "Diseño" }
    ];

    const handleCloseAlert = () => {
        setIsAlertOpen(false);
      };

      const handleConfirm = () => {
        // Redirige al usuario a /iniciar-sesion cuando hagan clic en confirmar
        navigate("/iniciar-sesion");
      };

    return (
        <Container maxWidth="sm" sx={{ paddingTop: '60px', paddingBottom: '60px' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Nombre"
                            {...register('name', { required: 'Este campo es requerido' })}
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}
                            sx={{ marginBottom: '20px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Correo"
                            {...register('email', { required: 'Este campo es requerido', pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' } })}
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                            sx={{ marginBottom: '20px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Contraseña"
                            type="password"
                            {...register('password', { required: 'Este campo es requerido' })}
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                            sx={{ marginBottom: '20px' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                     <Controller
              name="category"
              control={control}
              rules={{ required: 'Este campo es requerido' }}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Autocomplete
                  multiple
                  id="categories"
                  options={categories}
                  getOptionLabel={(option) => option.symbol}
                  value={value}
                  onChange={(e, newValue) => {
                    onChange(newValue);
                  }}
                  isOptionEqualToValue={(option, value) => option.symbol === value.symbol}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="Tu oferta de productos y servicios"
                      placeholder="Elegí todas las que necesites"
                      sx={{ marginBottom: '20px' }}
                      error={Boolean(error)}
                      helperText={error?.message}
                    />
                  )}
                />
              )}
            />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>Registrarse</Button>
                    </Grid>
                </Grid>
                <AlertDialog
  open={isAlertOpen}
  handleClose={handleCloseAlert}
  title="Alerta de Desarrollo"
  content="Esta es una aplicación en desarrollo. Los datos no se están procesando actualmente."
  confirmText="Participar de encuesta de desarrollo"
  cancelText="Cerrar"
  onCancel={handleCloseAlert}
  onConfirm={handleConfirm}
/>
            </form>
        </Container>
    );
};

export default Register;