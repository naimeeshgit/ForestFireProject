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
import c5 from "assets/images/canada/c5.png";
import c3 from "assets/images/canada/c3.png";
import c4 from "assets/images/canada/c4.png";

function C3() {
  return (
    <MKBox component="section" py={1} mt={1}>
      <Container>
        <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h3" color="black">
                Analysis by Month
              </MKTypography>
            </Grid>
          </Grid>

        <Grid container>
            <Grid alignSelf={'center'} lg={6}>
                <img src={c3} alt="..." height={300} width={600}/>
            </Grid>
            <Grid item alignSelf={'center'} lg={6}>
                <MKTypography variant="body1" color="black" mt={1}>
                    The monthly analysis gives us the average estimate of seasonal causes behind forest fires
                </MKTypography>
            </Grid>
            <Grid lg={2} mt={3}>
                <img src={c4} alt="..." height={300} width={200}/>
            </Grid>
            <Grid lg={4} mt={3}>
                <img src={c5} alt="..." height={300} width={400}/>
            </Grid>
            <Grid item alignSelf={'center'} lg={6}>
                <MKTypography variant="body1" color="black" mt={1}>
                    June and July notice the most forest fires in terms of area due to warmer climate
                </MKTypography>
            </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default C3;
