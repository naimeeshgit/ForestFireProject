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
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

// Images
import e1 from "assets/images/emissions/e1.png";

function I1() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 2 }}>
            <MKTypography variant="h2" color="black">
              Fire Vulnerable Districts
            </MKTypography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={8}>
          <MKTypography variant="body1" color="black">
            - Very high vulnerable districts are in central and southern part of India, dominated by dry and moist deciduous forests
          </MKTypography>
        </Grid>

        <Grid item xs={12} md={8}>
          <MKTypography variant="body1" color="black">
            - North-eastern India is vulnerable due to socio-cultural practices - clearing forest for agriculture through burning trees
          </MKTypography>
        </Grid>

        <Grid item xs={12} md={8}>
          <MKTypography variant="body1" color="black">
            - The anthropogenic reasons behind vulnerability:
          </MKTypography>
        </Grid>

        <Grid item xs={12} md={8} mb={3}>
          <MKTypography variant="body1" color="black" mt={1} ml={7}>
                <ol>
                  <li>Biotic pressure</li>
                  <li>Dependency of people on forests</li>
                  <li>Higher temperature during summer</li>
                  <li>Unsuitable weather conditions</li>
                  <li>Poverty</li>
                  <li>Illiteracy</li>
                </ol>
              </MKTypography>
        </Grid>







        

      </Container>
    </MKBox>
  );
}

export default I1;
