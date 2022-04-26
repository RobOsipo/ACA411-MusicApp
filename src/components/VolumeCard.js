import React, {useRef} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';



export default function VolumeCard({ value, setValue, setChangeFlag }) {


    const handleChange = (event) => {
      setChangeFlag(prevState => !prevState)
      setValue(event.target.value);
    };

  return (
    <Card sx={{ maxWidth: 245 }}>
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Master Volume
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Override all other sound settings in this app
        </Typography>
      </CardContent>
      <CardActions>

  
     
        
      <Slider
        size="small"
        value={value}
        aria-label="large"
        valueLabelDisplay="auto"
        onChange={handleChange}
    />
       
   
     
      </CardActions>
    </Card>
  );
}