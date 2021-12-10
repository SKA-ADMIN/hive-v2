import React from 'react'
import { TextField } from '@mui/material/';

export default function Input(props) {

    const { name, label, email,error=null, onChange, ...other } = props;
    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            email={email}
            onChange={onChange}
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
