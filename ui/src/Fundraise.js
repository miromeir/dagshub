import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import React, { useState } from 'react';
import axios from 'axios'

const StyledCard = styled(Card)({
    backgroundColor:"#FFFFFF",
    borderRadius:"6px",
    boxShadow:"0 30px 60px -12px rgb(50 50 93 / 25%), 0 18px 36px -18px rgb(0 0 0 / 30%), 0 -12px 36px -8px rgb(0 0 0 / 3%)",
    width:"364px",
    height:"334px",
    position:"absolute",
    top:"25%",
    left:"25%"
})

const StyledMedia = styled(CardMedia)({
    backgroundColor:"#F7F9FC",
    height:"38px",
    paddingTop:"15px",
    fontSize:"0.9rem",
    color:"#32325D",
})

function Fundraise(){
    const [donation, setDonation] = useState(1)
    return (
        <StyledCard >
            <StyledMedia
                component="div"
            >
                <Typography sx={{letterSpacing:1}}>$167 STILL NEEDED FOR THIS PROJECT</Typography>
            </StyledMedia>
            <CardContent>
                <Grid container direction={"column"} justifyContent={"space-between"} style={{height:"250px"}}>
                    <Grid item>
                <LinearProgress value={75} variant="determinate"  sx={{height:17, borderRadius:49}} color="primary"/>
                <p style={{textAlign:'left'}}>
                    <span style={{color:"#FA755A"}}>Only 3 days left </span><span style={{color:"#32325D"}}>to fund this project</span>
                </p>
                
                <div style={{color:"#525F7F", fontWeight:"100"}}>
                Join the 42 other donors who have already supported this project. Every dollar helps
                </div>
                <div>
                <TextField variant="standard" value={donation} onChange={(e)=>setDonation(e.target.value)} />
                <Button variant="contained" 
                        sx={{
                             backgroundColor:"#7795F8", 
                             color:"white"
                             }}
                        onClick={()=>axios.get(`/donate/${donation}`)}>
                        Give Now
                        
                </Button>
                </div>
                </Grid>
                <Grid item container justifyContent={'space-between'}>

                    <Grid item>
                        <Button variant="text">Tell Your friends</Button>
                    </Grid>
                    <Grid item>
                    <Button variant="text">Save for later</Button>
                    </Grid>
                </Grid>
            </Grid>
                
            </CardContent>
        </StyledCard>
    )
}

export default Fundraise