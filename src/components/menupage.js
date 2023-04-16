
import React from 'react'
import { Button, Card, CardContent, Grid, TextField, Typography, Box, Container } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Avatar from '@mui/material/Avatar';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const MenuPage = () => {
  return (

    <Container mt="4rem" sx={{ bgcolor: " rgba(228, 228, 239, 0.526)", height: "900px", margin: "10rem auto", width: "1400px", position: "relative" }}>
      <Box sx={{ paddingBottom: '20px', position: 'absolute', bottom: '110px' }}>
        <Box sx={{ position: 'absolute', bottom: '650px', left: '80px', display: 'flex' }}>

          <img alt='logo' color='white' src='data:image/png;base64,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' width="90" height="60px" />
          <Typography sx={{ ml: '10px', wordSpacing: '2px', letterSpacing: '3px', fontWeight: 'bold', fontSize: '30px', color: 'rgba(75, 10, 110, 0.803)' }}>Material UI Design Series</Typography>
        </Box>
        <Grid container ms={12} spacing={4} sx={{ boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' }}>

          <Grid item xs={4} sx={{ mt: "4rem" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="320" viewBox="0 0 36 32" fill="none" class="css-1170n61"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z" fill="#007FFF"></path></svg>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ textAlign: "center", display: 'flex', justifyContent: "center" }}>
              <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }} sx={{ boxShadow: 5 }}>
                <CardContent sx={{ position: 'relative' }}>
                  <Box sx={{ position: 'absolute', left: '160px', bottom: '525px' }}>
                    <Avatar
                      sx={{ bgcolor: 'green' }}
                      alt="Remy Sharp"

                    >
                      <AddCircleIcon />
                    </Avatar>

                  </Box>

                  <Typography gutterBottom variant="h5" padding="10px">Signup</Typography>
                  <Typography variant="body2" color="textSecondary" component="p">Please fill this form to create account!</Typography>
                  <form>
                    <Grid container spacing={1}>

                      <Grid xs={12} item>
                        <TextField label="Name" placeholder="Enter name" variant="standard" fullWidth required />
                      </Grid>

                      <Grid xs={12} item>
                        <TextField type="email" label="Email" placeholder="Enter email" variant="standard" fullWidth required />
                      </Grid>
                      <Grid sx={{ position: 'relative', right: '70px' }} xs={12} item>
                        <FormControl >

                          <FormLabel id="demo-row-radio-buttons-group-label" sx={{ display: "flex", justifyContent: "flex-start", mt: "4px", fontWeight: 'bold', opacity: '0.8' }} >Gender</FormLabel>

                          <Box sx={{ textAlign: "center" }}>
                            <RadioGroup
                              row
                              aria-labelledby="demo-row-radio-buttons-group-label"
                              name="row-radio-buttons-group"
                            >
                              <FormControlLabel value="female" control={<Radio sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                  color: pink[600],
                                },
                              }} />} label="Female" />
                              <FormControlLabel value="male" control={<Radio sx={{
                                color: pink[800],
                                '&.Mui-checked': {
                                  color: pink[600],
                                },
                              }} />} label="Male" />

                            </RadioGroup>
                          </Box>
                        </FormControl>
                      </Grid>
                      <Grid xs={12} item>
                        <TextField type="tel" label="PhoneNumber" placeholder="Enter Mobile.No" variant="standard" fullWidth required />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField label="Password" placeholder="password" variant="standard" fullWidth required />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField id="standard-confirm" label="Confirmpassword" type="search" variant="standard" fullWidth required />
                      </Grid>

                      <Grid xs={12} sx={{ display: "flex", justifyContent: "flex-start", position: 'relative' }} fullWidth>
                        <Checkbox
                          {...label}
                          defaultChecked
                          sx={{
                            color: pink[800],
                            '&.Mui-checked': {
                              color: pink[600],
                            },
                          }}
                        />
                        <Typography sx={{ position: 'absolute', left: '40px', top: '10px', color: 'gray' }}>I accept the terms and conditions.</Typography>

                      </Grid>

                      <Grid xs={12} item>
                        <Button variant='contained' sx={{ display: "flex", justifyContent: "flex-start", background: "blue", opacity: '0.8' }}>Signup</Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={4} mt="4rem">
            <img alt='logo' src='data:image/png;base64,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' width="100%" height="350px" bgcolor="rgba(228, 228, 239, 0.526)" />
          </Grid>

        </Grid>

      </Box>
    </Container>


  )
}

export default MenuPage;