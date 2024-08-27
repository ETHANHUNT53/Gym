import React from 'react';
import { CardActions, Card, CardContent, Typography, Button, Grid } from '@mui/material';

function WorkoutCard({ title, description, date, status }) {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Typography variant="body2">{date}</Typography>
        <Typography variant="body2">{status}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">Cancel Workout</Button>
        <Button size="small" variant="contained" color="success">Finish Workout</Button>
      </CardActions>
    </Card>
  );
}

export default WorkoutCard;
