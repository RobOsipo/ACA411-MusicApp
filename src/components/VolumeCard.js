import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';



export default function VolumeCard({ value, setValue }) {


    const handleChange = (event) => {
     
      setValue(event.target.value);
    };

  return (
    <Card className="a-card">
    
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