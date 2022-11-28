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
        <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h3" color="white">
              Effects of fire on soil properties and soil organic matter</MKTypography>

              <MKTypography variant="body1" color="white" mt={5}>
                <ul>
                Depending on the characteristics of soil, vegetation and fire effects on soil properties may vary substantially, from fertilization of the top layers due to ash deposition (which adds cations and balances pH) to changes in soil aggregate stability, pore size and distribution, water repellency, nutrients stocks and availability, and soil biota, thus influencing soil functions and ecosystem services.</ul></MKTypography>
            </Grid>
          </Grid>
        </Container>
        </MKBox>
    </>
  );
}

export default C2;
