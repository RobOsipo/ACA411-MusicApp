import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function MediaCard() {

const [online, setOnline] = React.useState(true)
const [warning, setWarning] = React.useState('')

const handleSwitch = () => {
  
    setOnline(prevState => !prevState)
    if (online === false) {return window.alert('Your application is offline. You wont be able to share or stream music to other devices.')}
}

const renderNotification = () => {
  return (
    <>
     <p>Your application is offline. You won't be able to share or stream music to other devices.</p>
    </>
  )
}



  return (
    <Card sx={{ maxWidth: 245 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Online mode
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Is this app connected to the internet?
        </Typography>
      </CardContent>
      <CardActions>
      <Switch onClick={handleSwitch} {...label} />
     <p>{online ? 'Online' : 'Offline'}</p>
      </CardActions>
      
    </Card>
  );
}