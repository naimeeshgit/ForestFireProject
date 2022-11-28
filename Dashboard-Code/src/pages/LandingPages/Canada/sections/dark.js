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
import c1 from "assets/images/canada/c1.png";

function C2() {
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
            <Grid container alignItems={'center'} lg={12}>
                <Grid alignSelf={'center'} lg={6}>
                    <img src={c1} alt="..." height={300} width={600}/>
                </Grid>
                <Grid alignSelf={'center'} lg={6}>
                    <img src={c1} alt="..." height={300} width={600}/>
                </Grid>
            </Grid>
            <Grid item xs={12} md={8} sx={{ mb: 6, mt:3 }}>
              <MKTypography variant="h2" color="white">
                Inferences
              </MKTypography>

              <MKTypography variant="body1" color="white" mt={1}>
                <ul>
                  <li>Northwestern Territories record the most forest fire due to extreme temperatures and due to a fairly dry climate. The topography being mountaneous also sees more lightning strikes hence observing more forest fires.</li>
                  <li>The data for 1995 and 1994 peaks due to more inclusive reporting of forest fires.</li>
                </ul>
              </MKTypography>

            </Grid>
        </Container>
        </MKBox>
    </>
  );
}

export default C2;
