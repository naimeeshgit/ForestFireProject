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
import e1 from "assets/images/emissions/e1.png";

function E1() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h2" color="black">
              About the Dataset
            </MKTypography>
          </Grid>
        </Grid>

        <Grid container mb={2}>
          <Grid item xs={6}>
            <img src={e1} alt="e1" height={400} width={600}/>
          </Grid>

          <Grid item xs={6}>
            <MKTypography variant="body1" color="black" mb={2}>
              <ul>
                <li>Verified dataset split according to 14 main regions.</li>
                <li>Contains all major emissions.</li>
                <li>Contains relevant data from 1997-2022</li>
                <li>Emissions split among different fire types:
                  <ol>
                    <li>Savanna, grassland, and shrubland fires</li>
                    <li>Boreal Forest fires</li>
                    <li>Temperate Forest fires</li>
                    <li>Tropical Deforestation and Degradation</li>
                    <li>Peat Fires</li>
                    <li>Agricultural Waste Burning</li>
                  </ol>
                </li>
              </ul>
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default E1;
