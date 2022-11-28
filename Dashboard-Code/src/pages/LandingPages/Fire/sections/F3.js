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
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Importing images
import e3 from "assets/images/emissions/e3.jpeg";

function E3() {
  return (
    <MKBox component="section" py={1} mt={1}>
      <Container>
            <Grid item xs={12} md={8} sx={{ mb: 1, mt:3 }}>
              <MKTypography variant="h2" color="black">
                After Fire
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h5" color="black">
                - Natural Regeneration
              </MKTypography>
            </Grid>

            <Grid item lg={12}>
              <MKTypography variant="body1" color="black" mt={1} ml={5}>
                <ul>
                  <li>Depends on the abundance of seeds available</li>
                  <li>doesn't allow for species selection, stocking levels and spacing</li>
                </ul>
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h5" color="black">
                - Artifical Regeneration
              </MKTypography>
            </Grid>

            <Grid item lg={12}>
              <MKTypography variant="body1" color="black" mt={1} ml={5}>
                <ul>
                  <li>Planting Seeds</li>
                </ul>
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h5" color="black">
                - Emergency stabilization program and rehabilitation efforts
              </MKTypography>
            </Grid>

            
        </Container>
    </MKBox>
  );
}

export default E3;
