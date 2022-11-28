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

function C5() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }} mt={2}>
              <MKTypography variant="h2" color="black">
                Fire Management Strategies
              </MKTypography>

              <MKTypography variant="body1" color="black" mt={5}>
                <ul>
                  <li>Fire has ecological benefits so suppression should be done on various ranges.</li>
                  <li>Monitoring and Prediction tools are important</li>
                  <li>Prescribed burning for lower risks</li>
                </ul>
              </MKTypography>

            </Grid>
          </Grid>
      </Container>
    </MKBox>
  );
}

export default C5;
