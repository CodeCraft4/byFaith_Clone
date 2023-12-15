import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { SERVICES } from 'constant/content'

const Services = () => {
  return (
    <div>
      <Container maxWidth='lg'>
        <Box textAlign={'center'} mt={8}>
          <Typography
            fontSize={13}
            fontWeight={900}
            color={'orange'}
          >OUR SERVICES</Typography>
          <Typography
            fontSize={{md:'2.5em',sm:'2.3em',xs:'2em'}}
            fontWeight={800}
            p={2}
          >Church Services</Typography>
          <Grid container spacing={6}>
            {SERVICES.map((e) => (
              <Grid item md={4} mt={5} sm={6} xs={12}>
                <img src={e.img} alt="churchImg"
                  width={90}
                  height={90}
                  style={{borderRadius:'50%'}}
                />
                <Typography
                  fontSize={20}
                  fontWeight={'bold'}
                  p={'2px'}>{e.title}</Typography>
                <Typography
                  fontSize={15}
                  fontWeight={'lighter'}
                  p={1}
                  color={'gray'}
                >{e.description}</Typography>
                <Button
                  sx={{ color: 'orange', fontSize: 12, fontWeight: 'bold' }}
                >+ Read more</Button>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Services
