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
import b4 from "assets/images/brazil/b4.png";

function B4() {
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
          <Grid item xs={12}>
            <MKTypography variant="h3" color="white">
              Reasons
            </MKTypography>
          </Grid>
        </Grid>

        <Grid container mb={4}>

            <Grid lg={6} mt={3}>
                <img src={b4} alt="..." height={400} width={600}/>
            </Grid>


            <Grid item alignSelf={'center'} lg={6} mt={2}>
              <MKTypography variant="body2" color="white">
                <ul>
                  <li>Dry weather, wind and heat: More extreme droughts are linked to global warming</li>
                  <li>El Niño: Almost one million hectare of primary and secondary forests was burned during the 2015–2016 El Niño season which led to over 30 million tonnes of CO2 emission </li>
                  <li>Accidental Forest Fires: In both Mata Grosso and southern Para, the area of standing forest affected by ac- cidental forest fires exceeded the area of new deforestation in 1995 (Alencar et al. 1997) </li>
                  <li>Human activities: Conventional agriculture, deforestation, lack of adequate environmental policies and surveillance.</li>
                </ul>
              </MKTypography>
            </Grid>
        </Grid>

        </Container>
        </MKBox>
    </>
  );
}

export default B4;
