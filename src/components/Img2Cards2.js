
import React from 'react'
import { Button, Card, CardContent, Grid, Typography, Container, styled } from '@mui/material'
import img1 from '../asserts/sravan.jpg'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import CardActions from '@mui/material/CardActions';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
const Img2Cards2 = () => {


  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

  return (
    <Container mt="4rem" sx={{ bgcolor: " rgba(228, 228, 239, 0.526)", height: "900px", margin: "10rem auto", width: "1000px", position: "relative" }}>
      <Grid container ms={12} spacing={2} mt="4rem" sx={{ padding: '20px', bottom: '220px', margin: '10 auto', position: "absolute" }}>

        <Grid item xs={6} sx={{ position: 'relative', left: '30px' }}>
          <Card sx={{ maxWidth: 245, padding: 5, borderRadius: 2, bgcolor: '  rgba(254, 254, 254, 0.795)' }}>
            <Stack direction="row" spacing={2} alignContent="center" display="flex" justifyContent="center">
              <Avatar src={img1} sx={{ height: "100px", width: "100px", mt: "2rem", boxShadow: 2, borderRadius: 3, border: '1px solid gray' }} variant="square">
                {/* <Avatar alt="Remy Sharp" src={img1} /> */}
              </Avatar>
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", mt: "2px", fontWeight: 'bold' }}>
                Mark Celero
              </Typography>
              <Typography variant="h6" color="p" sx={{ mt: "2px", textAlign: "center", fontSize: "25px" }}>
                marky78@email.com
              </Typography>
            </CardContent>

            <CardActions padding='6px'>

              <PeopleOutlineIcon sx={{ color: "white", mt: "2px" }} />
              <Button variant="contained" startIcon={<PeopleOutlineIcon sx={{ color: "white", mt: "2px" }} />} sx={{ textTransform: 'capitalize', fontSize: '18px', borderRadius: 2 }}>follow me</Button>

            </CardActions>

            <Grid container md={12} sx={{ mt: '15px', position: 'relative', top: '15px' }}>
              <Grid item xs={6} sx={{}}>
                <Typography variant='h1' component="div" sx={{ opacity: '0.8', fontSize: "30px", fontFamily: 'sans-serif' }}>12.6K</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "sans-serif", fontSize: "15px", paddingLeft: '4px' }}>Followers</Typography>
              </Grid>
              <Grid item xs={6} sx={{ position: 'relative' }}>
                <Typography variant='h1' component="div" sx={{ position: '', ml: '4px', paddingLeft: '30px', fontWeight: "", fontSize: "30px", fontFamily: 'sans-serif', opacity: '0.8' }}>85</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "sans-serif", fontSize: "15px", position: 'absolute', left: '20px' }}>Following</Typography>
              </Grid>
            </Grid>

          </Card>
        </Grid>

        {/* grid2 */}

        <Grid item xs={6} sx={{ position: 'relative', left: '30px' }}>
          <Card sx={{ maxWidth: 245, padding: 5, borderRadius: 2, bgcolor: '   rgba(14, 10, 10, 0.986)' }}>
            <Stack direction="row" spacing={2} alignContent="center" display="flex" justifyContent="center" >

              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                variant="dot"
              >


                <Avatar src={img1} sx={{ height: "100px", width: "100px", mt: "2rem", boxShadow: 2, borderRadius: 3, border: '1px solid gray' }} variant="square">

                </Avatar>

              </StyledBadge>
            </Stack>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center", mt: "2px", fontWeight: 'bold', color: 'whitesmoke', opacity: '0.8' }}>
                Mark Celero
              </Typography>
              <Typography variant="h6" color="p" sx={{ mt: "2px", textAlign: "center", fontSize: "25px", color: 'whitesmoke', opacity: '0.8' }}>
                marky78@email.com
              </Typography>
            </CardContent>

            <CardActions padding='6px' sx={{ position: 'relative', left: '30px' }}>
              <Button variant="contained" startIcon={<PeopleOutlineIcon sx={{ color: "white", mt: "2px", textTransform: 'capitalize', fontSize: '18px', borderRadius: 2 }} />}>follow me</Button>

            </CardActions>

            <Grid container md={12} sx={{ mt: '15px', position: 'relative', top: '15px' }}>
              <Grid item xs={6} >
                <Typography variant='h1' component="div" sx={{ opacity: '0.8', fontSize: "30px", fontFamily: 'sans-serif', color: 'white' }}>12.6K</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "sans-serif", fontSize: "15px", paddingLeft: '4px', color: 'gray' }}>Followers</Typography>
              </Grid>
              <Grid item xs={6} sx={{ position: 'relative' }}>
                <Typography variant='h1' component="div" sx={{ position: '', ml: '4px', paddingLeft: '30px', color: 'white', fontSize: "30px", fontFamily: 'sans-serif', opacity: '0.8' }}>85</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "sans-serif", fontSize: "15px", position: 'absolute', left: '20px', color: 'gray' }}>Following</Typography>
              </Grid>
            </Grid>

          </Card>
        </Grid>


      </Grid>
    </Container>
  )
}

export default Img2Cards2