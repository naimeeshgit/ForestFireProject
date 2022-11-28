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
import i1 from "assets/images/india/i1.png";
import i2 from "assets/images/india/i2.png";

function I3() {
  return (
    <MKBox component="section" py={1} mt={1}>
      <Container>
            <Grid item xs={12} md={8} sx={{ mb: 1, mt:3 }}>
              <MKTypography variant="h2" color="black">
                States with Most Forest Fires
              </MKTypography>
            </Grid>

            <Grid container alignItems={'center'} lg={12}>
              <Grid alignSelf={'center'} lg={6} mt={2}>
                  <img src={i1} alt="..." height={350} width={600}/>
              </Grid>

              <Grid alignSelf={'center'} lg={6} mt={2}>
                  <img src={i2} alt="..." height={350} width={600}/>
              </Grid>

              <Grid alignSelf={'center'} lg={12}>
                <MKTypography variant="body1" color="black" mt={1}>
                  <ul>
                    <li>From 2017, FSI has also started disseminating alerts obtained from SNPP-VIIRS sensor. </li>
                    <li>Registered users receive SMS and Email alerts having geo-coordinates of the fire location as well as a weblink to view it on their browser. </li>
                    <li>By comparing the two graphs, we can see that the top 5 states with the most recorded forest fires all have above average registration for Fire alerts. This is necessarily a good thing because it shows that people are more aware of the dangers of forest fires and are prepared to face it.</li>
                  </ul>
                </MKTypography>
              </Grid>
            </Grid>

            
        </Container>
    </MKBox>
  );
}

export default I3;
