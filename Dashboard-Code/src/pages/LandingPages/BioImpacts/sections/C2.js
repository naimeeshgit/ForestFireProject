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
              How fires affect biodiversity of aquatic ecosystems and water quality?
              </MKTypography>

              <MKTypography variant="body1" color="white" mt={5}>
                <ul>
                <li>Fires increase runoff, erosion and nutrient transport in the boundaries of aquatic habitats, reduce macrophyte vegetation and thus increase insolation and water temperature. </li><li>Water turbidity, conductance, C, N and P concentrations also change, and dissolved O2 is reduced. </li><li>Ashes in high concentration can kill native fish and be toxic to invertebrates depending on their chemical composition.</li></ul>
              </MKTypography>
            </Grid>
          </Grid>
        </Container>
        </MKBox>
    </>
  );
}

export default C2;
