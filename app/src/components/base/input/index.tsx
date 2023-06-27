import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

export const Input = ({ onChange, value  = ''}: {onChange: (value: string) => void, value: string }) => {
    return(  <TextField
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
      />)
}