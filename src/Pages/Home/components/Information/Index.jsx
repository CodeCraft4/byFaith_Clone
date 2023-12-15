import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { WHY_US } from "constant/content";

const WhyUs = () => {
  return (
    <div>
      <Box bgcolor={"rgb(10,50,64)"} p={4} mt={10}>
        <Container maxWidth="lg" sx={{ color: "white" }}>
          <Typography
            fontSize={15}
            fontWeight={900}
            color={"orange"}
            p={1}
            mt={5}
          >
            Why Us
          </Typography>
          <Grid container spacing={8}>
            <Grid item md={7} sm={6}>
              <Typography
                fontSize={{ md: "2.5em", sm: "2em", xs: "1.4em" }}
                fontWeight={900}
                pt={2}
              >
                You matter to God, you matter to us.
              </Typography>
              <Box mt={{ md: 8, sm: 20, xs: 5 }} position={"relative"}>
                <img
                  src="https://preview.colorlib.com/theme/byfaith/images/img_1.jpg"
                  alt="whyusImg"
                  width={"100%"}
                  style={{ borderRadius: 8 }}
                />
              </Box>
            </Grid>
            <Grid item md={5} sm={6}>
              <Typography fontSize={{ md: 17, sm: 13, xs: 13 }} pt={4}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.{" "}
              </Typography>
              <Grid container spacing={4} mt={5}>
                {WHY_US.map((e) => (
                  <Grid item md={6} sm={6}>
                    <Typography
                      fontSize={{ md: "12", sm: 12, xs: 14 }}
                      fontWeight={900}
                      p={2}
                    >
                      {e.title}
                    </Typography>
                    <Typography fontSize={{ md: 12, sm: 11, xs: 12 }}>
                      {e.description}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "orange",
                  borderRadius: "20px",
                  mt: 6,
                  fontSize: { md: 16, sm: 13, xs: 11 },
                  fontWeight: 700,
                  "&:hover": {
                    bgcolor: "white",
                    color: "orange",
                  },
                }}
              >
                SEND US YOUR PRAYER REQUEST
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default WhyUs;
