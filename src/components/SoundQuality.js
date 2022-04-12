import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function MediaCard() {

    
        const [quality, setQuality] = React.useState('');
      
        const handleChange = (event) => {
          setQuality(event.target.value);
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

  
     
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sound Quality</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={quality}
          onChange={handleChange}
          label="Quality"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'low'}>low</MenuItem>
          <MenuItem value={'normal'}>normal</MenuItem>
          <MenuItem value={'high'}>high</MenuItem>
        </Select>
        <p>{`current sound quality: ${quality}`}</p>
      </FormControl>
     
       
   
     
      </CardActions>
    </Card>
  );
}