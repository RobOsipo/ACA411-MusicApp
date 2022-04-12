import * as React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DashBoard from './DashBoard.js';

export default function BasicTextFields() {

    const [loggedIn, setLoggedIn] = React.useState(false)
    const [notifications, setNotifications] = React.useState([])

    const login = () => {
        setLoggedIn(prevState => !prevState)
    }



  return loggedIn ? 
  (
      <DashBoard notifications={notifications} setNotifications={setNotifications} />
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