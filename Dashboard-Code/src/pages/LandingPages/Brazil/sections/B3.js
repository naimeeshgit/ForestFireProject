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
import b3 from "assets/images/brazil/b3.png";

function B3() {
  return (
    <MKBox component="section" py={1} mt={1}>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <MKTypography variant="h2" color="black">
              Seasonality
            </MKTypography>
          </Grid>
        </Grid>

        <Grid container>
            <Grid lg={6} mt={3}>
                <img src={b3} alt="..." height={400} width={500}/>
            </Grid>
            <Grid item alignSelf={'center'} lg={6}>
              <MKTypography variant="body1" color="black" mt={1}>
                <ul>
                  <li>The graph shows that almost 70% of the fires occurred in the 2nd half of the year.</li>
                  <li>The largest number of fires in summer and autumn ~ 23k. </li>
                  <li>Least number of fires in spring - 9.3k.</li>
                  <li>The highest number of fires was in July.</li>
                </ul>
              </MKTypography>
            </Grid>
        </Grid>

      </Container>
    </MKBox>
  );
}

export default B3;
