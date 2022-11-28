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

// Importing images
import c5 from "assets/images/portugal/p6.png";



function C3() {
  return (
    <MKBox component="section" py={1} mt={1}>
      <Container>
        <Grid container>
            <Grid item xs={12} md={8} sx={{ mb: 6 }}>
              <MKTypography variant="h3" color="black">
              Reasoning: Anthropogenic Factors
              </MKTypography>
            </Grid>
          </Grid>

        <Grid container>
        <Grid item alignSelf={'center'} lg={6}>
                <MKTypography variant="body1" color="black" mt={1}>
                Portugal's peak tourist season tends to be from late June to early September.
                <br/> People prefer to go hiking and trekking in these 2 seasons. This means there will be bonfires, camp fires etc in the forests and more risk of forest fires.</MKTypography>
            </Grid>
            <Grid alignSelf={'center'} lg={6}>
                <img src={c5} alt="..." height={300} width={600}/>
            </Grid>
            
            
            
        </Grid>
      </Container>
    </MKBox>
  );
}

export default C3;
