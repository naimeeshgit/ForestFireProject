/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import f1 from "assets/images/fire/f1.png";

function E2() {
  return (
    <>
        <MKBox
        component="section"
        variant="gradient"
        bgColor="dark"
        position="relative"
        py={6}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        >
        <Container>
            <Grid item xs={12} md={8} sx={{ mb: 6, mt:3 }}>
              <MKTypography variant="h2" color="white">
                Prescribed Burning
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h4" color="white">
              Prescribed burning can be defined as the thoughtful and skilful application of fire to a
specific site under selected weather conditions to accomplish specific land management
objectives.</MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h4" color="white">
              Prescribed burning can be used to assist ecological system requirements such as:

              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h4" color="white">
                The main types of suppression tactics that can be implemented during a wildfire incident are:
              </MKTypography>
            </Grid>

            <Grid item lg={12}>
              <MKTypography variant="body1" color="white" mt={1} ml={5}>
                <ul>
                  <li>Forest Production</li>
                  <li>Water Catchment Yields</li>
                    <li>Erosion</li>
                    <li>Responses of Fauna and Fauna within that System to Fire</li>
                    <li>Fire Dependency of the System Required for Regeneration</li>
                    <li>Weed Responses to Fire</li>
                    <li>Predation</li>
                </ul>
              </MKTypography>


              

            </Grid>
        </Container>
        </MKBox>
    </>
  );
}

export default E2;
