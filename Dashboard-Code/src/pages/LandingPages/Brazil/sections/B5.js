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

// Images
import b5 from "assets/images/brazil/b5.png";
import b6 from "assets/images/brazil/b6.png";

function B5() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }} mt={2}>
            <MKTypography variant="h2" color="black">
              El Nino
            </MKTypography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid lg={6}>
            <img src={b5} alt="..." height={400} width={600}/>
          </Grid>
          <Grid lg={6}>
            <img src={b6} alt="..." height={400} width={600}/>
          </Grid>

          <Grid lg={12}>
            <MKTypography variant="body1" color="black" mt={5}>
              <ul>
                <li>El Niño is a climate pattern associated with a warming of Pacific Ocean currents that has a global influence on the weather.</li>
                <li>During El Niño, dry conditions lead to even lower water tables, which makes both the forests and peat vulnerable to fire. Humans take advantage of these drought conditions to burn the woods to clear more croplands.</li>
                <li>The intense drought made a tropical forest, one of the world's largest carbon sinks, into a massive source of emission.</li>
                <li>The annual mean precipitation during 2015-2016 drought periods was the lowest in 35 years.</li>
              </ul>
            </MKTypography>
          </Grid>

        </Grid>

      </Container>
    </MKBox>
  );
}

export default B5;
