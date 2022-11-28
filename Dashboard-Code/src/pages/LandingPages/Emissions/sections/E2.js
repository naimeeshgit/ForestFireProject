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
import e2 from "assets/images/emissions/e2.png";

function E2() {
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
            <Grid item xs={12} md={8} sx={{ mb: 6, mt:3 }}>
              <MKTypography variant="h2" color="white">
                Global CO2 Emissions
              </MKTypography>
            </Grid>

            <Grid container alignItems={'center'} lg={12}>
              <Grid alignSelf={'center'} lg={6}>
                  <img src={e2} alt="..." height={350} width={600}/>
              </Grid>
              <Grid alignSelf={'center'} lg={6}>
                <MKTypography variant="body1" color="white" mt={1}>
                  We select the 5 regions with the highest level of forest fire activity and plot their emissions over the years through an overlaid line graph.   
                </MKTypography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h3" color="white">
                Trends:
              </MKTypography>
            </Grid>

            <Grid item lg={12}>
              <MKTypography variant="body1" color="white" mt={1}>
                <ul>
                  <li>The largest fires occur in lower latitudes</li>
                  <li>Decreasing fires in NHAF and SHAF</li>
                  <li>Increasing fires in AUST and BONA</li>
                </ul>
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h3" color="white">
                Reasoning:
              </MKTypography>
            </Grid>

            <Grid item lg={12}>
              <MKTypography variant="body1" color="white" mt={1}>
                <ul>
                  <li>Lower latitudes with higher temperatures facilitate larger and longer fires</li>
                  <li>Decreasing fires: High precipitation, decrease in vegetation coverage and human intervention</li>
                  <li>Increasing fires: Rising temperature in those areas due to climate change.</li>
                </ul>
              </MKTypography>
            </Grid>
        </Container>
        </MKBox>
    </>
  );
}

export default E2;
