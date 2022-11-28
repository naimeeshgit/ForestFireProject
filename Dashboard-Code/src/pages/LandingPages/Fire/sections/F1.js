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

function E1() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h2" color="black">
              Before Fire
            </MKTypography>
          </Grid>
        </Grid>

        <Grid container mb={2} align={'center'}>
          <Grid item xs={3} ml={8}>
            <FilledInfoCard
                    variant="gradient"
                    color="info"
                    title="Monitoring"
                    description="Regular Monitoring Should be done using our plotting tool"
                  />
          </Grid>
          <Grid item xs={3} ml={10}>
            <FilledInfoCard
                    variant="gradient"
                    color="info"
                    title="Alerts"
                    description="Alerts should be made in nearby residential areas"
                  />
          </Grid>
          <Grid item xs={3} ml={10}>
            <FilledInfoCard
                  variant="gradient"
                  color="info"
                  title="Contacts"
                  description="Residents and Locals should be made aware of Helpline numbers"
                />
          </Grid>
        </Grid>

        <Grid container mb={2} align={'center'}>
          <Grid item xs={3} ml={8}>
            <FilledInfoCard
                    variant="gradient"
                    color="info"
                    title="Vigilance"
                    description="Pay close attention to weather and drought conditions which can affect the flammability of vegetation."
                  />
          </Grid>
          <Grid item xs={3} ml={10}>
            <FilledInfoCard
                    variant="gradient"
                    color="info"
                    title="Tourists"
                    description="Restrict Tourists from setting up camp-fires"
                  />
          </Grid>
          <Grid item xs={3} ml={10}>
            <FilledInfoCard
                  variant="gradient"
                  color="info"
                  title="Prescribed Burning"
                  description="Prescribed burning should be carried out. Materials burned in a planned fire include dead grass, fallen tree branches, dead trees, and thick undergrowth."
                />
          </Grid>

        </Grid>
      </Container>
    </MKBox>
  );
}

export default E1;
