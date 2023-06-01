import {
  Box,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const hoover = {
  "&:hover": {
    backgroundColor: "red",
  },
};
const Footer = () => {
  return (
    <>
      <Container maxWidth={100} sx={{ backgroundColor: "black" }}>
        <Container
          mt={5}
          sx={{
            height: "100%",
            // marginTop: "25px",
            paddingTop: "35px",
            paddingBottom: "25px",
          }}
        >
          <Box sx={{ display: "flex", backgroundColor: "black" }}>
            <Grid container xs={7} justifyContent={"start"}>
              <IconButton>
                <img src="/footer-logo.png" style={hoover} alt="footer-Img" />
              </IconButton>
              <Typography color={"white"} mt={2} pr={20}>
                Awako provides an AI-powered TMS that is an all-in-one platform
                for dispatch, accounting, ELD, dash cams, safety & compliance
                audit support, and professional back office services. Empowering
                trucking companies with powerful tools to drive their business
                to the next level.
              </Typography>
            </Grid>

            <Grid
              container
              xs={5}
              justifyContent={"space-between"}
              //   flexDirection={"column"}
              //   alignItems={"start"}
              //   spacing={2}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ marginBottom: "30px", opacity: "0.80" }}
                  variant="h6"
                  color={"whitesmoke"}
                >
                  Products
                </Typography>

                <Grid item spacing={2}>
                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    TMS
                  </Typography>

                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    ELD
                  </Typography>

                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    Dash Cams
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ marginBottom: "30px", opacity: "0.80" }}
                  variant="h6"
                  color={"whitesmoke"}
                >
                  Links
                </Typography>

                <Grid item spacing={2}>
                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    Services
                  </Typography>

                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    Company
                  </Typography>

                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    Contact
                  </Typography>

                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    Blogs & Latest News
                  </Typography>
                </Grid>
              </Grid>

              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ marginBottom: "30px", opacity: "0.80" }}
                  variant="h6"
                  color={"whitesmoke"}
                >
                  Resources
                </Typography>

                <Grid item spacing={2}>
                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    Customer Stories
                  </Typography>

                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    Support Center
                  </Typography>

                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    Guides
                  </Typography>

                  <Typography color={"white"} sx={{ marginBottom: "15px" }}>
                    Brand Assets
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              opacity: "0.5",
              letterSpacing: "0.12em",
            }}
            component={"div"}
            color={"white"}
            mt={6}
            pb={3}
          >
            © 2023 Awako | All rights reserved
          </Typography>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
