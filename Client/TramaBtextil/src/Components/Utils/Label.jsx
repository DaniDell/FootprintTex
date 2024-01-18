import * as React from "react";
import Chip from '@mui/material/Chip';

function Label({ backgroundColor = '#6750a4', text = 'Label' }) {
    return (
        <Chip size="small"
            label={text} 
            style={{backgroundColor, color: '#fff', width: 'auto', fontWeight: 'bold'}}
        />
    );
}

export default Label;