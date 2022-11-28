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
import b1 from "assets/images/brazil/b1.png";

function B1() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="black">
              Some Statistics
            </MKTypography>
          </Grid>
        </Grid>

        <Grid container alignItems={'center'} lg={12}>
          <Grid alignSelf={'center'} lg={6}>
              <img src={b1} alt="..." height={300} width={600}/>
          </Grid>
          <Grid alignSelf={'center'} lg={6}>
            <MKTypography variant="body1" color="black" mt={1}>
              <ul>
                <li>Average - 4.8k fires per year</li>
                <li>The number of forest fires increased dramatically from 20k in 1998 to 40k in 2016</li>
                <li>The largest number of fires was in 2003, 2015 and 2016.</li>
              </ul>
            </MKTypography>
          </Grid> 
        </Grid>
      </Container>
    </MKBox>
  );
}

export default B1;
