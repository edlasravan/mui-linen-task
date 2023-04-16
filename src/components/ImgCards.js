
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Grid, Container, Box, } from '@mui/material';
import img1 from '../asserts/nature.jpg'
import img4 from '../asserts/hero-desktop.jpg'
import img2 from '../asserts/sravan.jpg'
import img3 from '../asserts/pink.jpg'
import Avatar from '@mui/material/Avatar';
import PinDropIcon from '@mui/icons-material/PinDrop';
import { blue } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GroupAddIcon from '@mui/icons-material/GroupAdd';



export const ImgCards = () => {
  return (
    <>
    
    <Box sx={{ height: '' }}>


        <Container sx={{ bgcolor: " rgba(6, 6, 9, 0.899)", height: "1000px", margin: "10rem auto", width: "1000px", position: "relative" }} container>
          <Box sx={{  padding: '20px', margin: 10, mt: "150px", position: "absolute", alignItems: "center", justifyContent: "center", display: 'flex' }}>
            <Grid container md={12} item >
              <Grid xs={6} sx={{ padding: "40px" }} direction="row" item>
                <Card sx={{ maxWidth: 395, boxShadow: 2, bgcolor: "whitesmoke", position: "relative", width: "350px" }}>


                  <Box sx={{ position: "relative" }}>

                    <Box sx={{ backgroundImage: `url(${img1})`, opacity: 0.7, width: "100%", height: "200px", backgroundSize: "cover", position: "relative" }}>
                      <Avatar sx={{ position: 'absolute', right: 20, mt: 3, height: 40, width: 40, color: 'white', border: '4px solid white', bgcolor: "gray" }} ><AddIcon color='white' /></Avatar>


                    </Box>

                    <Avatar
                      alt="Remy Sharp"
                      src={img2}
                      sx={{ width: 96, height: 100, position: "absolute", ml: '6px', right: "8px", left: "7px", top: "150px", border: '4px solid yellow' }}
                    />
                  </Box>

                  <CardContent >
                    <Box sx={{ textAlign: 'center', position: 'relative', }}>
                      <Typography gutterBottom variant="body2" color="gray" sx={{ position: 'absolute', bottom: "15px", right: "58px", textAlign: "center", fontWeight: "bold", fontSize: "19px", padding: "2px" }}>
                        Dorothy Simpson
                      </Typography>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <PinDropIcon color='disabled' sx={{ mt: 1 }} />
                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", padding: "4px", fontSize: "15px", opacity: 0.8, mt: 1, fontWeight: 'bold' }}>New York,USA  </Typography>
                      </Box>
                    </Box>



                    <Typography variant="body2" color="text.secondary" sx={{ padding: "10px", fontSize: "15px", fontWeight: 'bold', opacity: 0.8 }}>
                      Well, thanks to the Internat,I'm now <br />with .is there a place on the web that<br />panders to my lust for violence?<br />
                    </Typography>
                    <Button size="small" sx={{ color: blue, fontWeight: "bold", fontSize: "18px", padding: "8px" }}>UICHEST.COM</Button>

                  </CardContent>
                  <Box sx={{ borderTop: '1px solid lightgray', height: "80px" }}>
                    <Grid md={12} item sx={{ display: "flex", textAlign: "center" }}>


                      <Grid xs={4} item>
                        <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
                          <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Posts</Typography>
                          <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
                            <OpenInNewIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} />
                            <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>1056</Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={4}>
                        <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
                          <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Followers</Typography>
                          <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
                            <GroupAddIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} />
                            <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>1472</Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={4}>
                        <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
                          <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Following</Typography>
                          <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
                            <GroupAddIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} />
                            <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>384</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Card>

              </Grid>
              <Grid xs={6} sx={{ padding: "40px" }} item>
                <Card sx={{ maxWidth: 395, boxShadow: 2, bgcolor: "whitesmoke", position: "relative", width: "350px", height: "478px" }}>


                  <Box sx={{ position: "relative" }}>

                    <Box sx={{ backgroundImage: `url(${img3})`, opacity: 0.7, width: "100%", height: "200px", backgroundSize: "cover", position: "relative" }}>

                    </Box>

                    <Avatar
                      alt="Remy Sharp"
                      src={img4}
                      sx={{ width: 96, height: 100, position: "absolute", ml: '6px', right: "29px", left: "110px", top: "150px", border: '4px solid violet' }}
                    />
                  </Box>

                  <CardContent >
                    <Box sx={{ textAlign: 'center', position: 'relative', }}>
                      <Typography gutterBottom variant="body2" color="gray" sx={{ position: 'relative', top: '50px', right: "40px", left: '-6px', textAlign: "center", fontWeight: "bold", fontSize: "19px" }}>
                        Jack Shaw
                      </Typography>

                      <Typography gutterBottom variant="body2" color="text.secondary" sx={{ position: 'relative', top: '50px', right: "40px", left: '-6px', textAlign: "center", fontWeight: "bold", fontSize: "15px", opacity: "0.8" }}>
                        Designer ,photographer,traveller
                      </Typography>
                      <Button variant="outlined" sx={{ position: 'absolute', top: '120px', right: '110px', border: "4px solid  rgba(10, 34, 215, 0.674)", borderRadius: 4, fontWeight: 'bold', fontSize: "18px" }}>Follow</Button>
                    </Box>

                  </CardContent>

                  <Box sx={{ borderTop: '1px solid lightgray', height: "80px", position: "relative", top: "110px" }}>
                    <Grid md={12} item sx={{ display: "flex", textAlign: "center" }}>


                      <Grid xs={4} sx={{ borderRight: '1px solid lightgray' }} item>
                        <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
                          <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Posts</Typography>
                          <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
                            {/* <OpenInNewIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} /> */}
                            <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>137</Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={4} sx={{ borderRight: '1px solid lightgray' }}>
                        <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
                          <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Followers</Typography>
                          <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
                            {/* <GroupAddIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} /> */}
                            <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>5228</Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid xs={4}>
                        <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
                          <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Following</Typography>
                          <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
                            {/* <GroupAddIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} /> */}
                            <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>84</Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>

                </Card>
              </Grid>
            </Grid>

          </Box>
        </Container>


      </Box>
    
    </>
  )
}




//   return (
//     <>
//       <Box sx={{ height: '' }}>


//         <Container sx={{ bgcolor: " rgba(6, 6, 9, 0.899)", height: "1000px", margin: "10rem auto", width: "1000px", position: "relative" }} container>
//           <Box sx={{ background: "", padding: '20px', margin: 10, mt: "150px", position: "absolute", alignItems: "center", justifyContent: "center", display: 'flex' }}>
//             <Grid container md={12} item >
//               <Grid xs={6} sx={{ padding: "40px" }} direction="row" item>
//                 <Card sx={{ maxWidth: 395, boxShadow: 2, bgcolor: "whitesmoke", position: "relative", width: "350px" }}>


//                   <Box sx={{ position: "relative" }}>

//                     <Box sx={{ backgroundImage: `url(${img1})`, opacity: 0.7, width: "100%", height: "200px", backgroundSize: "cover", position: "relative" }}>
//                       <Avatar sx={{ position: 'absolute', right: 20, mt: 3, height: 40, width: 40, color: 'white', border: '4px solid white', bgcolor: "gray" }} ><AddIcon color='white' /></Avatar>


//                     </Box>

//                     <Avatar
//                       alt="Remy Sharp"
//                       src={img2}
//                       sx={{ width: 96, height: 100, position: "absolute", ml: '6px', right: "8px", left: "7px", top: "150px", border: '4px solid yellow' }}
//                     />
//                   </Box>

//                   <CardContent >
//                     <Box sx={{ textAlign: 'center', position: 'relative', }}>
//                       <Typography gutterBottom variant="body2" color="gray" sx={{ position: 'absolute', bottom: "15px", right: "68px", textAlign: "center", fontWeight: "bold", fontSize: "19px", padding: "2px" }}>
//                         Dorothy Simpson
//                       </Typography>
//                       <Box sx={{ display: "flex", justifyContent: "center" }}>
//                         <PinDropIcon color='disabled' sx={{ mt: 1 }} />
//                         <Typography variant="body2" color="text.secondary" sx={{ textAlign: "center", padding: "4px", fontSize: "15px", opacity: 0.8, mt: 1, fontWeight: 'bold' }}>New York,USA  </Typography>
//                       </Box>
//                     </Box>



//                     <Typography variant="body2" color="text.secondary" sx={{ padding: "10px", fontSize: "15px", fontWeight: 'bold', opacity: 0.8 }}>
//                       Well, thanks to the Internat,I'm now <br />with .is there a place on the web that<br />panders to my lust for violence?<br />
//                     </Typography>
//                     <Button size="small" sx={{ color: blue, fontWeight: "bold", fontSize: "18px", padding: "8px" }}>UICHEST.COM</Button>

//                   </CardContent>
//                   <Box sx={{ borderTop: '1px solid lightgray', height: "80px" }}>
//                     <Grid md={12} item sx={{ display: "flex", textAlign: "center" }}>


//                       <Grid xs={4} item>
//                         <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
//                           <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Posts</Typography>
//                           <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
//                             <OpenInNewIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} />
//                             <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>1056</Typography>
//                           </Box>
//                         </Box>
//                       </Grid>
//                       <Grid xs={4}>
//                         <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
//                           <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Followers</Typography>
//                           <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
//                             <GroupAddIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} />
//                             <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>1472</Typography>
//                           </Box>
//                         </Box>
//                       </Grid>
//                       <Grid xs={4}>
//                         <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
//                           <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Following</Typography>
//                           <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
//                             <GroupAddIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} />
//                             <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>384</Typography>
//                           </Box>
//                         </Box>
//                       </Grid>
//                     </Grid>
//                   </Box>
//                 </Card>

//               </Grid>
//               <Grid xs={6} sx={{ padding: "40px" }} item>
//                 <Card sx={{ maxWidth: 395, boxShadow: 2, bgcolor: "whitesmoke", position: "relative", width: "350px", height: "478px" }}>


//                   <Box sx={{ position: "relative" }}>

//                     <Box sx={{ backgroundImage: `url(${img3})`, opacity: 0.7, width: "100%", height: "200px", backgroundSize: "cover", position: "relative" }}>

//                     </Box>

//                     <Avatar
//                       alt="Remy Sharp"
//                       src={img4}
//                       sx={{ width: 96, height: 100, position: "absolute", ml: '6px', right: "29px", left: "110px", top: "150px", border: '4px solid violet' }}
//                     />
//                   </Box>

//                   <CardContent >
//                     <Box sx={{ textAlign: 'center', position: 'relative', }}>
//                       <Typography gutterBottom variant="body2" color="gray" sx={{ position: 'relative', top: '50px', right: "40px", left: '-6px', textAlign: "center", fontWeight: "bold", fontSize: "19px" }}>
//                         Jack Shaw
//                       </Typography>

//                       <Typography gutterBottom variant="body2" color="text.secondary" sx={{ position: 'relative', top: '50px', right: "40px", left: '-6px', textAlign: "center", fontWeight: "bold", fontSize: "15px", opacity: "0.8" }}>
//                         Designer ,photographer,traveller
//                       </Typography>
//                       <Button variant="outlined" sx={{ position: 'absolute', top: '120px', right: '110px', border: "4px solid  rgba(10, 34, 215, 0.674)", borderRadius: 4, fontWeight: 'bold', fontSize: "18px" }}>Follow</Button>
//                     </Box>

//                   </CardContent>

//                   <Box sx={{ borderTop: '1px solid lightgray', height: "80px", position: "relative", top: "110px" }}>
//                     <Grid md={12} item sx={{ display: "flex", textAlign: "center" }}>


//                       <Grid xs={4} sx={{ borderRight: '1px solid lightgray' }} item>
//                         <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
//                           <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Posts</Typography>
//                           <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
//                             {/* <OpenInNewIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} /> */}
//                             <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>137</Typography>
//                           </Box>
//                         </Box>
//                       </Grid>
//                       <Grid xs={4} sx={{ borderRight: '1px solid lightgray' }}>
//                         <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
//                           <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Followers</Typography>
//                           <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
//                             {/* <GroupAddIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} /> */}
//                             <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>5228</Typography>
//                           </Box>
//                         </Box>
//                       </Grid>
//                       <Grid xs={4}>
//                         <Box sx={{ alignItems: "center", mt: "4px", padding: "4px" }}>
//                           <Typography variant='body2' color="text.secondary" sx={{ fontWeight: "bold", fontSize: "17px", opacity: 0.8 }}>Following</Typography>
//                           <Box sx={{ display: "flex", justifyContent: 'center', mb: "15px", alignItems: "center" }}>
//                             {/* <GroupAddIcon sx={{ fontSize: "25px", padding: "2px", color: "gray" }} /> */}
//                             <Typography variant='body2' color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold", opacity: 0.8, padding: "2px" }}>84</Typography>
//                           </Box>
//                         </Box>
//                       </Grid>
//                     </Grid>
//                   </Box>

//                 </Card>
//               </Grid>
//             </Grid>

//           </Box>
//         </Container>


//       </Box>



//     </>
//   );
// }