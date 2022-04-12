import * as React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function BasicTextFields() {

    const [loggedIn, setLoggedIn] = React.useState(false)

    const login = () => {
        setLoggedIn(prevState => !prevState)
    }



  return loggedIn ? 
  (
      <div>hello</div>
  )
  :
  (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <br />
      <Button onClick={login} variant="contained" color="primary">Temporary</Button>
    </Box>
  );
}