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

function C1() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h3" color="black">
                Fire and Grazing
              </MKTypography>

              <MKTypography variant="body1" color="black" mt={5}>
                <ul>
                  <li>In grassy ecosystems, fire and grazers interact in positive-and-negative feedback. </li>
                <li>After burning, grasses quickly resprout, offering palatable and nutritious tissues that attract herbivores, which thus concentrate grazing in these burned patches and reduce biomass and fire risk.</li>
                <li>Less-grazed patches, with more biomass, will eventually burn, thus creating a mosaic of grazed and ungrazed patches that control fires at the landscape level.</li>
                <li>Such spatio-temporal mosaic of burned and unburned patches favors fire-dependent species, and also maintains species that are more sensitive to fire, being thus positive in terms of biodiversity conservation.</li></ul></MKTypography>
            </Grid>
          </Grid>
      </Container>
    </MKBox>
  );
}

export default C1;
