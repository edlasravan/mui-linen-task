import React from "react"
import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material'

const formCard=()=> {
  return (
    <div className="App">
      <Typography gutterBottom variant="h3" align="center">
        React-App
      </Typography>
      <Card style={{maxWidth:450,margin:"0 auto",padding:"20px 5px"}}>
        <CardContent>
          <Typography gutterBottom variant="h5">contact-us</Typography>
          <Typography variant="body2" color="textSecondary" component="p">fill in contact form below</Typography>
          <form>
          <Grid container spacing={1}>

            <Grid xs={12} sm={6} item>
              <TextField label="First Name" placeholder="Enter first name" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last Name" placeholder="Enter last name" variant="outlined" fullWidth required />
            </Grid>

            <Grid xs={12} item>
              <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField type="tel" label="MobileNumber" placeholder="Enter Mobile.No" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <TextField label="Messege" multiline rows={4} placeholder="Type message" variant="outlined" fullWidth required />
            </Grid>
            <Grid xs={12} item>
              <Button variant="contained" fullWidth color="primary">Submit</Button>
            </Grid>
          </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default formCard;
