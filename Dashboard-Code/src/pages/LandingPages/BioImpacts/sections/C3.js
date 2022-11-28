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
                How fires affect Wildlife
              </MKTypography>

              <MKTypography variant="body1" color="black" mt={5}>
                <ul>
                <li>Fire effects on animals can be direct/immediate (e.g., death, harm), indirect (e.g., changing habitat and food sources), or, in the long-term, induce animal evolutionary responses to fire regimes.</li><li>Animals from non-flammable ecosystems are usually much affected by wildfires, while those (some endemic) of fire-prone ecosystems are adapted or may even need fire to survive because of the ecological cascade associated with post-fire ecosystem regeneration.</li></ul>
              </MKTypography>
            </Grid>
          </Grid>
      </Container>
    </MKBox>
  );
}

export default C1;
