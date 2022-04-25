import * as React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DashBoard from './DashBoard.js';

export default function BasicTextFields({ online, setOnline, quality, setQuality, value, setValue }) {

    const [loggedIn, setLoggedIn] = React.useState(false)
   
   

    const login = () => {
        setLoggedIn(prevState => !prevState)
    }



  return loggedIn ? 
  ( 
      <DashBoard 
         online={online}
         setOnline={setOnline}
         quality={quality}
         setQuality={setQuality}
         value={value}
         setValue={setValue}
       />
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
      <TextField id="outlined-basic" label="User Name" variant="outlined" />
      <br />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <br />
      <Button onClick={login} variant="contained" color="primary">Log In (:</Button>
    </Box>
  );
}