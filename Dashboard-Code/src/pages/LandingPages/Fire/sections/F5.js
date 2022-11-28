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
              <MKTypography variant="h5" color="black">
              To implement a safe and successful prescribed burn, it is important to understand how
various factors influence fire behaviour. Wind, relative humidity, temperature, soil moisture, fuel
moisture, air mass stability, and topography are important elements to understand and consider when planning and implementing a burn:
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h5" color="black">
                - Wind
              </MKTypography>
            </Grid>

            <Grid item lg={12}>
              <MKTypography variant="body1" color="black" mt={1} ml={5}>
                <ul>
                  <li>Transport Wind Speed : 6 to 18 mph</li>
                  <li>Surface Wind Speed : 1 to 3 mph</li>
                  <li>Although it varies with topology, wind direction and wind steadiness</li>
                </ul>
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h5" color="black">
                - Relative Humidity
              </MKTypography>
            </Grid>

            <Grid item lg={12}>
              <MKTypography variant="body1" color="black" mt={1} ml={5}>
                <ul>
                  <li>Preferred relative humidity for prescribed burning ranges from 30 to 55 percent.</li>
                  <li>When the relative humidity drops below 30 percent, prescribed burning can become dangerous.</li>
                </ul>
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h5" color="black">
                - Rainfall and Soil Moisture
              </MKTypography>
            </Grid>
            <Grid item lg={12}>
              <MKTypography variant="body1" color="black" mt={1} ml={5}>
                <ul>
                  <li>Soil should be damp to moderately wet</li>
                  <li>Prescribed burning should cease during periods of drought and resume only after a good soaking rain of at least 1 inch. </li>
                  <li>On clay soils, much of the rainfall is lost through surface runoff. Therefore, the duration of the rainfall is more important than the amount that falls.</li>
                </ul>
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h5" color="black">
                - Temperature
              </MKTypography>
            </Grid>
            <Grid item lg={12}>
              <MKTypography variant="body1" color="black" mt={1} ml={5}>
                <ul>
                  <li>Highly depends on vegetation and hence on the region.</li>
                  </ul>
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h5" color="black">
                - Fuel Moisture
              </MKTypography>
            </Grid>
            <Grid item lg={12}>
              <MKTypography variant="body1" color="black" mt={1} ml={5}>
                <ul>
                  <li>FFM to 10-20%</li>
                  <li>Roughly, RH/2 = FFM</li></ul>
              </MKTypography>
            </Grid>
            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h5" color="black">
                - Topography
              </MKTypography>
            </Grid>
            <Grid item lg={12}>
              <MKTypography variant="body1" color="black" mt={1} ml={5}>
                <ul>
                  <li>Fires burn more rapidly uphill than downhill. The
steeper the slope, the faster and hotter the fire burns.</li>
                  <li>This is because the fuels above the fire are brought into closer contact with the upward-moving flames.</li>
                </ul>
              </MKTypography>
            </Grid>



            
        </Container>
    </MKBox>
  );
}

export default E3;
