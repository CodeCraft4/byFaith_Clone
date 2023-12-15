import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'

const AboutUs = () => {
    return (
        <div>
            <Box>
                <Container maxWidth="lg">
                    <Grid container spacing={15}>
                        <Grid item md={5} sm={6}>
                            <Typography
                                fontSize={{md:16,xs:12}}
                                fontWeight={900}
                                color={'orange'}
                                px={3}

                            >ABOUT US</Typography>
                            <Typography
                                fontSize={{md:'2.3em',sm:'2.3em',xs:'2em'}}
                                fontWeight={900}
                                p={2}

                            >Living and  Sharing
                                <br /> The Gospel</Typography>
                            <Typography p={2} fontSize={14} color={'gray'}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Typography>
                            <Typography px={2} fontSize={14} color={'gray'}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</Typography>
                            <Button
                                variant='contained'
                                sx={{
                                    bgcolor: 'orange',
                                    borderRadius: 20,
                                    fontWeight: 600,
                                    mx: 3,
                                    mt: 3,
                                    "&:hover": {
                                        bgcolor: "white",
                                        color: 'orange',
                                    }
                                }}
                            >KNOW MORE ABOUT US</Button>
                        </Grid>
                        <Grid item md={7} sm={6} mt={{md:0,sm:20}}>
                            <img src="https://preview.colorlib.com/theme/byfaith/images/img_3.jpg"
                                alt=""
                                width={'100%'}
                                style={{ borderRadius: 8 }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default AboutUs
