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
import c1 from "assets/images/portugal/portugal1.png";

function C2() {
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
            <Grid container alignItems={'center'} lg={12}>
                {/* <Grid alignSelf={'center'} lg={6}>
                    <img src={c1} alt="..." height={300} width={600}/>
                </Grid> */}
            </Grid>
            <Grid item xs={12} md={8} sx={{ mb: 6, mt:3 }}>
              <MKTypography variant="h3" color="white">
               The Dataset
              </MKTypography>

              <MKTypography variant="body1" color="white" mt={1}>
                <ul>
                  <li>The dataset contains forest fire data from the Montesinho National Park, which is located in the northeast region of Portugal.
The data used in the analysis was collected from January 2000 to December 2003.
</li>
                  <li>The dataset contains the following attributes: </li>
                  <li> X - x-axis spatial coordinate within the Montesinho park map: 1 to 9</li>
                  <li> Y - y-axis spatial coordinate within the Montesinho park map: 2 to 9</li>
                  <li> month - month of the year: 'jan' to 'dec'</li>
                  <li> day - day of the week: 'mon' to 'sun'</li>
                  <li> FFMC - Fine Fuel Moisture Code index from the FWI system: 18.7 to 96.20</li>
                  <li> DMC - Duff Moisture Code index from the FWI system: 1.1 to 291.3</li>
                  <li> DC - Drought Code index from the FWI system: 7.9 to 860.6</li>
                  <li> ISI - Initial Spread index from the FWI system: 0.0 to 56.10</li>
                  <li> temp - temperature in Celsius degrees: 2.2 to 33.30</li>
                  <li> RH - relative humidity in %: 15.0 to 100</li>
                  <li> wind - wind speed in km/h: 0.40 to 9.40</li>
                  <li> rain - outside rain in mm/m2 : 0.0 to 6.4</li>
                  <li> area - the burned area of the forest (in ha): 0.00 to 1090.84</li>

                </ul>
              </MKTypography>

            </Grid>
        </Container>
        </MKBox>
    </>
  );
}

export default C2;
