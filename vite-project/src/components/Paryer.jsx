import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({name, time, image}) {
  return (
    <Card sx={{ width: "100%", margin: "5px"}}>
      <CardMedia
        sx={{ height: 150 ,width:"100%"}}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <h2 gutterBottom variant="h5" component="div">
          {name}
        </h2>
        <Typography variant="h2" sx={{ color: 'text.secondary' }}>
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
}
