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
import c1 from "assets/images/portugal/portugal1.png";
// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function C1() {
  return (
    <MKBox component="section" py={1}>
      <Container>
        <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h3" color="black">
                Some Statistics
              </MKTypography>

              <MKTypography variant="body1" color="black" mt={5}>
                <ul>
                  <li>Forest area decreased 4.6% between 1995 and 2010 corresponding to a net decrease of 0.3% year or 104 ha/year.</li>
                  <li>The decrease in pine forest area is the major driver of the observed decrease in forest surface.</li>
                  <li>The area occupied by pine forest diminished by 263 x 103 ha between 1995 and 2010.</li>
                  <Grid alignSelf={'center'} lg={6}>
                    <img src={c1} alt="..." height={300} width={600}/>
                </Grid>
                </ul>
              </MKTypography>
            </Grid>
          </Grid>
      </Container>
    </MKBox>
  );
}

export default C1;
