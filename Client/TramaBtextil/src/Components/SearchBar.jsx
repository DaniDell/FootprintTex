import React from "react";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/system";
import TuneIcon from "@mui/icons-material/Tune";
import FilterDialog from "../Components/Utils/FilterDialog.jsx";

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
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
    <Box display="flex" justifyContent="end" sx={{ marginRight: 3, marginLeft: 3, marginTop: 2, gap: 1 }}>
      <RoundedTextField
        id="search"
        label="DEMO: Aquí podrás buscar en breve."
        variant="outlined"
        size="small"
        sx={{
          boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
          borderRadius: "50px",
          width: '100%',
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
          boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#4a4a46",
          color: "white",
        }}
        onClick={handleClickOpen}
      >
        <TuneIcon />
      </IconButton>

      <FilterDialog open={open} handleClose={handleClose} />
    </Box>
  );
};

export default SearchBar;
