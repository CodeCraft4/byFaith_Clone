import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <div>
      <Box bgcolor={"#ff9100"} mt={8}>
        <Container maxWidth="lg">
          <Grid container p={4} spacing={5}>
            <Grid item md={4} color={"black"} sm={6} xs={12}>
              <Typography fontSize={20} color={"rgb(16,58,94)"}>
                Contact
              </Typography>
              <Typography
                fontSize={14}
                sx={{
                  borderBottom: "2px solid gray",
                  width: "40%",
                  pt: 2,
                  "&:hover": {
                    borderBottom: "2px solid black",
                  },
                }}
              >
                Tel:
                <Link to={"/home"} style={linkStyle}>
                  +447522063381
                </Link>
              </Typography>
              <Typography
                fontSize={14}
                sx={{
                  borderBottom: "2px solid gray",
                  width: "60%",
                  pt: 2,
                  "&:hover": {
                    borderBottom: "2px solid black",
                  },
                }}
              >
                Email:
                <Link to={"/home"} style={linkStyle}>
                  Basfax11@gmail.com , steviebas2011@hotmail.com
                </Link>
              </Typography>
              <Typography
                fontSize={14}
                sx={{
                  opacity: ".8",
                  borderBottom: "2px solid gray",
                  width: "50%",
                  pt: 2,
                  "&:hover": {
                    opacity: 1,
                    color: "black",
                    borderBottom: "2px solid black",
                    transition: ".4s",
                  },
                }}
              >
                Tiktok:
                <Link to={"/home"} style={linkStyle}>
                  stephen bastien
                </Link>
              </Typography>
              <Typography
                fontSize={14}
                sx={{
                  opacity: ".8",
                  borderBottom: "2px solid gray",
                  width: "80%",
                  pt: 2,
                  "&:hover": {
                    opacity: 1,
                    color: "black",
                    borderBottom: "2px solid black",
                    transition: ".4s",
                  },
                }}
              >
                Instagram:
                <Link to={"/home"} style={linkStyle}>
                  constable_cruise_ayia_napa
                </Link>
              </Typography>
              <Typography
                fontSize={14}
                sx={{
                  opacity: ".8",
                  borderBottom: "2px solid gray",
                  width: "85%",
                  pt: 2,
                  "&:hover": {
                    opacity: 1,
                    color: "black",
                    borderBottom: "2px solid black",
                    transition: ".4s",
                  },
                }}
              >
                Facebook:
                <Link to={"/home"} style={linkStyle}>
                  stephen bastien(constable cruise)
                </Link>
              </Typography>
            </Grid>
            <Grid item md={3} color={"gray"} sm={6} xs={12}>
              <Typography fontSize={20} color={"rgb(16,58,94)"}>
                Services
              </Typography>
              <Grid container spacing={4}>
                <Grid item md={6} sm={6} xs={6}>
                  <List>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Home
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Sermom
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Ministries
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Event
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Contact
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Privacy
                      </Link>
                    </ListItem>
                  </List>
                </Grid>
                <Grid item md={6} sm={6} xs={6}>
                  <List>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Partners
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Bussiness
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Carrer
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Blogs
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        FAQ
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link to={"/home"} style={linkStyle}>
                        Creative
                      </Link>
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={4} mx={5} sm={6} xs={12}>
              <Typography fontSize={20} color={"rgb(16,58,94)"}>
                Links
              </Typography>
              <List>
                <ListItem>
                  <Link to={"/home"} style={linkStyle}>
                    Our Vision
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/home"} style={linkStyle}>
                    About us
                  </Link>
                </ListItem>
                <ListItem>
                  <Link to={"/home"} style={linkStyle}>
                    Contact us
                  </Link>
                </ListItem>
              </List>
              <Link to={"/home"}>
                <Instagram
                  fontSize="large"
                  sx={{
                    p: 1,
                    bgcolor: "white",
                    borderRadius: "50%",
                    color: "gray",
                    m: "3px",
                    "&:hover": { bgcolor: "black", color: "white" },
                  }}
                />
              </Link>
              <Link to={"/home"}>
                <Twitter
                  fontSize="large"
                  sx={{
                    p: 1,
                    bgcolor: "white",
                    borderRadius: "50%",
                    color: "gray",
                    m: "3px",
                    "&:hover": { bgcolor: "black", color: "white" },
                  }}
                />
              </Link>
              <Link to={"/home"}>
                <FacebookOutlined
                  fontSize="large"
                  sx={{
                    p: 1,
                    bgcolor: "white",
                    borderRadius: "50%",
                    color: "gray",
                    m: "3px",
                    "&:hover": { bgcolor: "black", color: "white" },
                  }}
                />
              </Link>
              <Link to={"/home"}>
                <LinkedIn
                  fontSize="large"
                  sx={{
                    p: 1,
                    bgcolor: "white",
                    borderRadius: "50%",
                    color: "gray",
                    m: "3px",
                    "&:hover": { bgcolor: "black", color: "white" },
                  }}
                />
              </Link>
              <Link to={"/home"}>
                <Pinterest
                  fontSize="large"
                  sx={{
                    p: 1,
                    bgcolor: "white",
                    borderRadius: "50%",
                    color: "gray",
                    m: "3px",
                    "&:hover": { bgcolor: "black", color: "white" },
                  }}
                />
              </Link>
            </Grid>
          </Grid>
          <Typography sx={{ textAlign: "center", color: "black", p: 2 }}>
            Copyright ©2023 All rights reserved | This template is made with by
            Colorlib
          </Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;

const linkStyle = {
  textDecoration: "none",
  color: "white",
  "&:hover": {
    color: "black",
  },
};
