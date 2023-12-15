import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { SERMON_CARD } from "constant/content";

const SermonAbout = () => {
  return (
    <React.Fragment>
      <Box>
        <Container maxWidth="md">
          <Typography
            fontSize={{ md: 16, xs: 12 }}
            fontWeight={900}
            textAlign={"center"}
            mt={10}
            color={"orange"}
          >
            SERMON
          </Typography>
          <Typography
            fontSize={{ md: "3em", sm: "3em", xs: "2em" }}
            textAlign={"center"}
            fontWeight={900}
            p={2}
          >
            Recent Sermons
          </Typography>
          <Grid container spacing={5}>
            {SERMON_CARD.map((e) => (
              <Grid item md={e.grid} sm={6} xs={12}>
                {e?.title && (
                  <Box
                    position={"relative"}
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    zIndex={-999}
                    borderRadius={"50%"}
                    bgcolor={"black"}
                    outline={'1px solid white'}
                    width={"100%"}
                    height={{md:'200px',xs:'280px'}}
                  >
                    <Box
                      position={"absolute"}
                      height={{md:'200px',xs:'280px'}}
                      width={"100%"}
                      sx={{ opacity: 0.5 }}
                      zIndex={-1}
                      component="img"
                      src={e?.imgUrl}
                      borderRadius={"50%"}
                    ></Box>
                    <Typography
                      zIndex={999}
                      fontSize={13}
                      fontWeight={"bold"}
                      color={"white"}
                      textAlign={"center"}
                    >
                      {e.title}
                    </Typography>
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default SermonAbout;
