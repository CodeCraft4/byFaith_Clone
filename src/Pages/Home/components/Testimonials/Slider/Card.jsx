import React from "react";
import { Box, Typography } from "@mui/material";
import "./Slider.css";

export const CardSlider = ({ img, head, person, description }) => (
  <div>
    <Box mt={6} width={{ md: 500, xs: 400, sm: 400 }}>
      <Typography p={2} fontWeight={"bold"} fontSize={{ md: 20, xs: 15 }}>
        Far far away, behind the word mountains,{head}
      </Typography>
      <Typography sx={{ fontStyle: "italic", fontSize: { xs: 10 },wordWrap:'break-word' }}>
        {description}
      </Typography>
      <img
        src={img}
        alt="TestimonialImg"
        width={70}
        height={70}
        style={{ borderRadius: "50%", margin: 4 }}
      />
      <Typography fontWeight={"bold"} fontSize={{ md: 20, xs: 15 }}>
        {person}
      </Typography>
      <Typography>Person</Typography>
    </Box>
  </div>
);
