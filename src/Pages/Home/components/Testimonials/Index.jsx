import React from "react";
import { Box, Typography } from "@mui/material";
import App from "./Slider/mainSlider";

const Testimonials = () => {
  return (
    <div>
      <Box textAlign={"center"} mt={10}>
        <Typography fontWeight={900} color={"orange"}>
          TESTIMONIALS
        </Typography>
        <Typography
          fontWeight={900}
          p={2}
          fontSize={{ md: "2.5em", sm: "2.3em", xs: "1.5em" }}
        >
          Living Testimonies
        </Typography>
        <App />
      </Box>
    </div>
  );
};

export default Testimonials;
