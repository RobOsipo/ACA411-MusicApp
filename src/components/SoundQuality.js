import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function SoundQuality({ quality, setQuality}) {
    
       
      
  const handleChange = (event) => {
   
     setQuality(event.target.value);
          };
      


  return (
    <Card className="a-card" >
    
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sound Quality
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Manually Control Music Quality
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