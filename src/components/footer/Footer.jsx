import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Stack,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import logo from "../../assets/logo.png";
import googlePlay from "../../assets/playstore.png";
import appStore from "../../assets/appstore.png";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#eaeaea", py: 6 }}>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="flex-start"
          spacing={4}
        >

          <Grid item xs={12} md="auto">

            <Box display="flex" alignItems="center" mb={2}>
              <img
                src={logo}
                alt="Stackly Logo"
                style={{ height: 50, marginRight: 8 }}
              />
            </Box>


            <Typography variant="h6" fontWeight="medium" gutterBottom>
              We’re always here to help
            </Typography>
            <Typography variant="body1" gutterBottom>
              You can get help by choosing from any of these options
            </Typography>


            <Box mt={3}>
              <Typography variant="body2" gutterBottom>
                Download from
              </Typography>
              <Stack direction="row" spacing={2}>
                <img src={googlePlay} alt="Google Play" style={{ height: 40 }} />
                <img src={appStore} alt="App Store" style={{ height: 40 }} />
              </Stack>
            </Box>

            <Box mt={3}>
              <Typography variant="body2" gutterBottom>
                Social media
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton color="inherit">
                  <Instagram />
                </IconButton>
                <IconButton color="inherit">
                  <Facebook />
                </IconButton>
                <IconButton color="inherit">
                  <Twitter />
                </IconButton>
              </Stack>
            </Box>
          </Grid>

          <Grid item xs={12} md="auto">
            <Grid container spacing={2} mb={4}>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight="medium">
                  Help Centre
                </Typography>
                <MuiLink href="#" underline="hover" color="inherit">
                  link
                </MuiLink>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight="medium">
                  Phone
                </Typography>
                <Typography variant="body1">+91 75242xxxxx</Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight="medium">
                  Email
                </Typography>
                <Typography variant="body1">thestackly@company.com</Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="subtitle1" gutterBottom>
                  Categories
                </Typography>
                {["Link", "Link", "Link", "Link"].map((link, i) => (
                  <MuiLink
                    key={i}
                    href="#"
                    underline="hover"
                    color="inherit"
                    display="block"
                  >
                    {link}
                  </MuiLink>
                ))}
              </Grid>
              {[1, 2].map((menuIndex) => (
                <Grid item xs={4} key={menuIndex}>
                  <Typography variant="subtitle1" gutterBottom>
                    Menu
                  </Typography>
                  {["Link", "Link", "Link", "Link"].map((link, i) => (
                    <MuiLink
                      key={i}
                      href="#"
                      underline="hover"
                      color="inherit"
                      display="block"
                    >
                      {link}
                    </MuiLink>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          mt={5}
          spacing={2}
        >
          <Grid item xs={12} md="auto">
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Stackly Cart. All rights reserved
            </Typography>
          </Grid>
          <Grid item xs={12} md="auto">
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <MuiLink href="#" underline="hover" color="inherit">
                Terms
              </MuiLink>
              <MuiLink href="#" underline="hover" color="inherit">
                Cookies
              </MuiLink>
              <MuiLink href="#" underline="hover" color="inherit">
                Privacy Policy
              </MuiLink>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;