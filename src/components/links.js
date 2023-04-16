import React from 'react'
import { Card, Grid, Typography, Box, Container } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import LinkIcon from '@mui/icons-material/Link';
import img1 from '../asserts/sravan.jpg'



const Links = () => {
    return (
        <Box>
            <Container sx={{ bgcolor: " gra", height: "300px", margin: "10rem auto", width: "1000px", position: "relative", borderLeft: '6px solid lightgray' }} container>
                <Box sx={{ height: '185px', width: "600px", borderLeft: '6px solid rgba(143, 16, 122, 0.899)', position: 'absolute', top: '30px', left: '90px' }}>

                    <Box  >
                        <Card sx={{ boxShadow: 3, padding: "9px", height: '160px', position: 'relative' }} spacing={4}>
                            <Grid container ms={12} spacing={2}>

                                <Grid xs={4} item marginRight="4px" position='relative'>
                                    <Card sx={{ boxShadow: 0, padding: 3, }}>
                                        <Stack direction="row" spacing={2} >
                                            <Avatar sx={{ textAlign: "center" }} alt="Remy Sharp" src={img1} style={{ height: "100px", width: "100px" }} />
                                        </Stack>
                                    </Card>

                                </Grid>
                                <Grid xs={4} item>
                                    <Card sx={{ boxShadow: 0 }}>
                                        <i class="fa-solid fa-crown fa-2xl" style={{ color: "yellow", marginRight: "20px" }}></i>
                                        <Typography variant='p' fontSize="20px" color="textSecondary" component="p" style={{ paddingTop: "16px" }}>@kingjames</Typography>
                                        <Box style={{ display: "flex" }} mt="2rem">


                                            <img src='https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg' height="50px" width="50px" />


                                            <Typography gutterBottom style={{ fontWeight: "bold", fontSize: "25px", marginTop: "5px" }}>118.4M</Typography>

                                        </Box>
                                    </Card>
                                </Grid>
                                <Grid xs={4} item>
                                    <Card sx={{ boxShadow: 0 }}>
                                        <Box sx={{ display: "flex", position: "absolute", left: "400px", bottom: '40px' }}  >
                                            <LinkIcon sx={{ color: "gray" }} />
                                            <Link href="#" padding="3px" sx={{ textDecoration: 'none', color: 'gray', fontSize: '25px' }}>https://www.i.....</Link>
                                        </Box>
                                    </Card>

                                </Grid>
                            </Grid>
                        </Card>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Links