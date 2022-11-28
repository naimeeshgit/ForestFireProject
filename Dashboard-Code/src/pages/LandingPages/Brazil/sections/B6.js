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

function B6() {
  return (
    <MKBox
        component="section"
        variant="gradient"
        bgColor="dark"
        position="relative"
        py={2}
        px={{ xs: 2, lg: 0 }}
        mx={-2}
        >
      <Container>
        <Grid container>
            <Grid item xs={12}>
                <MKTypography variant="h2" color="white">
                    Fire Management Strategies
                </MKTypography>
            </Grid>

            <Grid item xs={12}>
                <MKTypography variant="body1" color="white" mt={5}>
                    <ul>
                        <li>Land management: combat risk of forest fires.</li>
                        <li>Command and control against illegal fires: Fire management as such can only be efficient if agencies are properly equipped, supplied and trained</li>
                        <li>Adopt alternative land use techniques: e.g. agroforestry, crop-livestock-forest integration, rotation between crop and pasture, no-tillage cultivation, shredding of cut vegetation, allowing a  transition to more sustainable and fire-free types of land use</li>
                        <li>Development of monitoring systems: Research on fire should integrate different knowledge areas from biological to human science.</li>
                    </ul>
                </MKTypography>
            </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default B6;
