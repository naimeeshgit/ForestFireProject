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
                Impacts on Biodiversity
              </MKTypography>

              <MKTypography variant="body1" color="black" mt={5}>
                <ul>
                  <li>Global Scale: They are a significant source of emitted carbon, contributing to global warming which could lead to biodiversity changes.</li>
                  <li>Regional Scale: Changes biomass stocks, alters the hydrological cycle with subsequent effects for marine systems such as coral reefs, and impact plant and animal species’ functioning.</li>
                  <li>Pyrophytic Conversion: In tropical forests, dead trees topple to the ground, opening up the forest to drying by sunlight, and building up the fuel load with an increase in fire-prone species, such as pyrophytic grasses which makes them susceptible to further burns.
</li><li>Effect on flora: Fire can kill virtually all seedlings, sprouts, lianas and young trees because they are not protected by thick bark which hinders recovery of the original species, in forests not adapted to fires</li>
<li>Effect on fauna: Large scale death of forest vertebrates and invertebrates, as well as longer-term indirect effects such as stress and loss of habitat, territories, shelter and food which slows recovery rate of the forest.</li>
<li>Photosynthetic Activity: Smoke from fires can block of sunlight and significantly impact photosynthesis, which can be detrimental to health of humans and animals. </li>
                </ul>
              </MKTypography>
            </Grid>
          </Grid>
      </Container>
    </MKBox>
  );
}

export default C1;
