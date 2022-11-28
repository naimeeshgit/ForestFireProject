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
            <Grid item xs={12} md={8} sx={{ mb: 6, mt:3 }}>
              <MKTypography variant="h2" color="black">
                Global Overall Emissions
              </MKTypography>
            </Grid>

            <Grid container alignItems={'center'} lg={12}>
              <Grid alignSelf={'center'} lg={6}>
                  <img src={e3} alt="..." height={350} width={600}/>
              </Grid>
              <Grid alignSelf={'center'} lg={6}>
                <MKTypography variant="body1" color="black" mt={1}>
                  We select the most prominent emissions of forest fires and plot their global emissions in comparison.
                </MKTypography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h3" color="black">
                Trends:
              </MKTypography>
            </Grid>

            <Grid item lg={12}>
              <MKTypography variant="body1" color="black" mt={1}>
                <ul>
                  <li>As time passes there are peaks and troughs in emissions due to forest fires.</li>
                  <li>CO2 is the largest emitted by a decent margin followed by CO.</li>
                  <li>The general trend of average emissions is mostly stagnant.</li>
                </ul>
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h3" color="black">
                Reasoning:
              </MKTypography>
            </Grid>

            <Grid item lg={12}>
              <MKTypography variant="body1" color="black" mt={1} mb={3}>
                <ul>
                  <li>Fire size, spread, duration and speed are factors that largely influence fires and cause peaks and troughs.</li>
                </ul>
              </MKTypography>
            </Grid>
        </Container>
    </MKBox>
  );
}

export default E3;
