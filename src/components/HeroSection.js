import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TagFacesOutlinedIcon from "@mui/icons-material/TagFacesOutlined";
import React from "react";

const heroText = {
  fontWeight: 700,
  fontSize: "1.5em",
};

const smiley = {
  backgroundColor: "skyblue",
  borderRadius: "100%",
  color: "#005dfe",
  alignSelf: "start",
};
const HeroSection = () => {
  return (
    <>
      <Container sx={{ position: "relative" }}>
        <Box sx={{ display: "flex" }} mb={20}>
          <Grid container xs={6} flexDirection={"column"} mt={5}>
            <Typography
              color={"skyblue"}
              sx={{ letterSpacing: 0.5, wordSpacing: 2 }}
              mt={3}
            >
              F l e e t M a n a g e m e n t S i m p l i f i e d
            </Typography>
            <Grid mt={5}>
              <Typography component={"span"} mr={1} sx={heroText}>
                Awako - The True
              </Typography>
              <Typography component={"span"} color={"#005dfe"} sx={heroText}>
                All-in-One
              </Typography>
            </Grid>
            <Typography sx={heroText}>Platform for Fleet Management</Typography>

            <Typography
              sx={{ opacity: "0.80", lineHeight: "2em", letterSpacing: 1 }}
              pr={4}
              mt={5}
            >
              Awako provides an AI-powered TMS that is an all-in-one platform
              for dispatch, accounting, ELD, dash cam, telematics, professional
              back office support, safety & compliance audits.
            </Typography>

            <Box
              sx={{
                width: "200px",
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
              mt={5}
            >
              <Button
                variant="contained"
                sx={{
                  margin: "auto",
                  position: "absolute",
                  borderRadius: "64px",
                  backgroundColor: "#005dfe",
                }}
              >
                Get started now
                <ArrowForwardIcon
                  sx={{
                    pl: "8px",
                    // position: "absolute",
                    // top: "5px",
                    // left: "80%",
                  }}
                />
              </Button>
            </Box>
          </Grid>

          <Grid container xs={6} justifyContent={"center"}>
            <IconButton>
              <img src="/content-img-1.png" width="350px" alt="" />
            </IconButton>
          </Grid>
        </Box>
      </Container>

      <Box bgcolor={"#f0f1f8"} paddingBottom={8}>
        <Container>
          <Box sx={{ display: "flex" }}>
            <Grid container xs={6} mt={10}>
              <IconButton>
                <img src="/content-boy.png" width="350px" alt="" />
              </IconButton>
            </Grid>

            <Grid
              container
              xs={6}
              justifyContent={"start"}
              mt={10}
              flexDirection={"column"}
            >
              <Typography color={"skyblue"}>TMS</Typography>
              <br />
              <Typography
                variant="h5"
                sx={heroText}
                style={{ letterSpacing: 1.8, wordSpacing: 2 }}
              >
                One PlatForm - All of Your Business
              </Typography>
              <br />

              <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Grid xs={6} px={5}>
                  <IconButton>
                    <TagFacesOutlinedIcon sx={smiley} />
                    <Typography textAlign={"left"} pl={1}>
                      AI powered work order entry
                    </Typography>
                  </IconButton>
                  <IconButton>
                    <TagFacesOutlinedIcon sx={smiley} />
                    <Typography textAlign={"left"} pl={1}>
                      Automated dispatching & accounting
                    </Typography>
                  </IconButton>
                  <IconButton>
                    <TagFacesOutlinedIcon sx={smiley} />
                    <Typography textAlign={"left"} pl={1}>
                      Safety & compliance seamlessly monitored
                    </Typography>
                  </IconButton>
                </Grid>
                <Grid xs={6} px={5}>
                  <IconButton>
                    <TagFacesOutlinedIcon sx={smiley} />
                    <Typography textAlign={"left"} pl={1}>
                      AI powered work order entry
                    </Typography>
                  </IconButton>
                  <IconButton>
                    <TagFacesOutlinedIcon sx={smiley} />
                    <Typography textAlign={"left"} pl={1}>
                      Automated dispatching & accounting
                    </Typography>
                  </IconButton>
                  <IconButton>
                    <TagFacesOutlinedIcon sx={smiley} />
                    <Typography textAlign={"left"} pl={1}>
                      Safety & compliance seamlessly monitored
                    </Typography>
                  </IconButton>
                </Grid>
              </Box>
              <Grid pl={"40px"} pr={2}>
                <IconButton>
                  <TagFacesOutlinedIcon sx={smiley} />
                  <Typography textAlign={"left"} pl={1}>
                    Intuitive mobile application for drivers, owner-operators, &
                    carriers
                  </Typography>
                </IconButton>
              </Grid>
              <br />
              <Button
                variant="outlined"
                sx={{ borderRadius: "64px", width: "200px" }}
              >
                Learn More
                <ArrowForwardIcon fontSize={"small"} sx={{ pl: 1, pb: 0.5 }} />
              </Button>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
