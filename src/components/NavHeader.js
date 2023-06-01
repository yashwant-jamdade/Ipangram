import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, Grid, IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const navItems = {
  color: "grey",
  fontSize: "12px",
  letterSpacing: "0.1em",
  // paddingLeft: "5px",
  // paddingRight: "5px",
};

const Navbar = () => {
  return (
    <>
      <Container>
        <Box sx={{ display: "flex" }} position={"static"} mt={3}>
          <Grid container xs={"2"} justifyContent={"center"} mr={4}>
            <Grid>
              <IconButton>
                <img src="/header-logo.png" alt="header-logo" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid
            container
            xs={"8"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            px={4}
            sx={{ color: "black" }}
          >
            <Grid>
              <Button sx={navItems}>Solutions</Button>
            </Grid>
            <Grid>
              <Button sx={navItems}>Products</Button>
              <Button size="small">
                <ExpandMoreIcon
                  sx={{ color: "grey", margin: "0", padding: "0" }}
                />
              </Button>
            </Grid>
            <Grid>
              <Button sx={navItems}>industries</Button>
              <Button size="small">
                <ExpandMoreIcon
                  sx={{ color: "grey", margin: "0", padding: "0" }}
                />
              </Button>
            </Grid>
            <Grid>
              <Button sx={navItems}>Resources</Button>
              <Button size="small">
                <ExpandMoreIcon
                  sx={{ color: "grey", margin: "0", padding: "0" }}
                />
              </Button>
            </Grid>

            <Grid>
              <Button sx={navItems}>Company</Button>
            </Grid>
          </Grid>

          <Grid
            container
            xs={"2"}
            justifyContent={"space-between"}
            alignItems={"center"}
            // px={8}
          >
            <Grid>
              <Button
                variant="contained"
                size="medium"
                sx={{ borderRadius: "64px", backgroundColor: "#005dfe" }}
              >
                Contact Us Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Navbar;
