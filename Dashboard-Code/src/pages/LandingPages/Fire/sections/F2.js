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
import f1 from "assets/images/fire/f1.png";

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
                During Fire
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h4" color="white">
                - Any fire requires three ingredients: Oxygen, Fuel and Heat  
              </MKTypography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h4" color="white">
                - Fire Triangle  
              </MKTypography>
            </Grid>

            <Grid container alignItems={'center'} lg={12}>
              <Grid alignSelf={'center'} lg={4} mt={2}>
                  <img src={f1} alt="..." height={350} width={350}/>
              </Grid>
              <Grid alignSelf={'center'} lg={6}>
                <MKTypography variant="body1" color="white" mt={1}>
                  <ul>
                    <li>Cooling - tackling heat/temperature: One of the most common methods of extinguishing a fire is by cooling it with water. This process depends on cooling the fuel to a point where it does not produce sufficient vapour to burn. </li>
                    <li>Smothering - by air-dropping sand</li>
                    <li>Starvation - using prescribed burning</li>
                  </ul>
                </MKTypography>
              </Grid>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mt:3 }}>
              <MKTypography variant="h4" color="white">
                The main types of suppression tactics that can be implemented during a wildfire incident are:
              </MKTypography>
            </Grid>

            <Grid item lg={12}>
              <MKTypography variant="body1" color="white" mt={1} ml={5}>
                <ul>
                  <li>Direct attack </li>
                </ul>
              </MKTypography>
              <MKTypography variant="body1" color="white" mt={1} ml={10}>
                <ol>
                  <li>During direct attack, firefighters attack the fire aggressively by using hand tools and beaters and/or by applying water and/or retardants.</li>
                  <li>for flame lengths less than 2 metres</li>
                </ol>
              </MKTypography>

              <MKTypography variant="body1" color="white" mt={1} ml={5}>
                <ul>
                  <li>Indirect attack</li>
                </ul>
              </MKTypography>
              <MKTypography variant="body1" color="white" mt={1} ml={10}>
                <ol>
                  <li>Indirect attack is where personnel and resources complete suppression activities some distance away from the fire front.</li>
                  <li>for flame lengths 2-3.5 m</li>
                </ol>
              </MKTypography>

              <MKTypography variant="body1" color="white" mt={1} ml={5}>
                <ul>
                  <li>Aerial attack</li>
                </ul>
              </MKTypography>
              <MKTypography variant="body1" color="white" mt={1} ml={10}>
                <ol>
                  <li>Aircrafts/drones can be used for direct and indirect attacks.</li>
                </ol>
              </MKTypography>

            </Grid>
        </Container>
        </MKBox>
    </>
  );
}

export default E2;
