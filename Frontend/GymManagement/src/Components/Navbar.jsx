import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box
} from '@mui/material';
import { Star } from '@mui/icons-material';

// Example coach data
const coaches = [
  {
    name: 'Kristin Watson',
    title: 'Certified personal yoga trainer',
    description: 'A Yoga Expert dedicated to crafting personalized workout plans that align with your goals.',
    rating: 4.96,
    image: 'path/to/image1.jpg', // Replace with actual image paths
  },
  {
    name: 'Wade Warren',
    title: 'Climbing Coach',
    description: 'Scale new challenges with our Climbing Coach. Get instruction to improve climbing skills, and build confidence on the wall.',
    rating: 4.8,
    image: 'path/to/image2.jpg',
  },
  {
    name: 'Cameron Williamson',
    title: 'Strength Coach',
    description: 'Achieve peak performance with our Strength Coach, a specialist in building muscle and increasing power.',
    rating: 5.0,
    image: 'path/to/image3.jpg',
  },
  // Add more coaches as needed
];

function CoachesPage() {
  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={3}>
        {coaches.map((coach, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image={coach.image}
                alt={coach.name}
              />
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {coach.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {coach.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1} mb={2}>
                  {coach.description}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Star sx={{ color: '#FFDF00' }} />
                  <Typography variant="body2" ml={0.5}>
                    {coach.rating}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#9EF300',
                    color: '#000',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#9EF300' },
                    width: '100%',
                  }}
                >
                  Book Workout
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default CoachesPage;
