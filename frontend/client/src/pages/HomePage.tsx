import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import CardButtons from '../components/CardButtons';
import useSports from '../hooks/useSports';

export default function HomePage() {

    const { sports, state, error } = useSports();
  
    if (state === 'loading') {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="33vh">
            <div>Loading sports...</div>
        </Box>
       );
    }
  
    if (state === 'error') {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="33vh">
              <Typography variant="h6" color="error">
                Error: {error?.message}
              </Typography>
            </Box>
        );
    }
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '70px' }}>
        <Container maxWidth={false} sx={{ textAlign: 'center', my: 3, paddingLeft: 0, paddingRight: 0 }}>
          <Typography
            variant='h4'
            component='div'
            sx={{
              fontWeight: 700,
              mb: 2,
              color: '#5D1F4C',
              fontFamily: 'monospace',
            }}
          >
            UniSportBerlin: Fitness, Fun, and Beyond
          </Typography>
          <Box sx={{ width: '100%', overflow: 'hidden', maxHeight: '300px' }}>
            <img
              src='https://cdn.pixabay.com/photo/2017/08/24/21/41/tartan-track-2678544_1280.jpg'
              alt='UniSportBerlin'
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Box>
        </Container>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {sports.map((sport) => (
            <Card key={sport.slug} sx={{ minWidth: 300, maxWidth: 345, margin: '10px' }}>
              <CardActionArea component={Link} to={'/detail/' + sport.slug}>
                {sport.image ? (
                  <CardMedia sx={{ height: 250 }} image={sport.image} />
                ) : (
                  <div
                    style={{
                      height: 250,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    Image Not Available
                  </div>
                )}
                <CardContent sx={{ height: 200 }}>
                  <Typography gutterBottom variant='h5' component='div'>
                    {sport.name}
                  </Typography>
                  <Typography variant='subtitle2' color='text.secondary'>
                    {sport.location}
                  </Typography>
                  <Typography variant='subtitle2' color='text.secondary'>
                    {sport.schedule}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {sport.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardButtons slug={sport.slug} />
            </Card>
          ))}
        </div>
      </div>
    );
  }
