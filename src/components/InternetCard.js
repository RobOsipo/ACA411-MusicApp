import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function InternetCard({ online, setOnline, setChangeFlag }) {

 


const handleSwitch = () => {
  
    setOnline(prevState => !prevState)
    setChangeFlag(prevState => !prevState)

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