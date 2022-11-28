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
import c6 from "assets/images/portugal/portugal4.png";
import c7 from "assets/images/portugal/p5.png";

function C4() {
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
                <Grid item xs={12} md={8} sx={{ mb: 6 }}>
                    <MKTypography variant="h2" color="white">
                    Reasoning: Natural Factors
                    </MKTypography>
                </Grid>
            </Grid>

            <Grid container alignItems={'center'} lg={12}>
            <Grid item alignSelf={'center'} lg={12}>
                <MKTypography variant="body1" color="white" mt={1}>
                The summer and fall seasons witness the most forest fires because of higher temperature 
and lower relative humidity.</MKTypography>
            </Grid>
            <Grid container alignItems={'center'} lg={12}>
            <Grid alignSelf={'center'} lg={12}>
                <img src={c6} alt="..." height={300} width={1200}/>
            </Grid>
            <Grid alignSelf={'center'} lg={12}>
                <img src={c7} alt="..." height={300} width={1200}/>
            </Grid>
            <Grid item alignSelf={'center'} lg={6}>
                <MKTypography variant="body1" color="white" mt={1}>
                These environmental factors makes it extremely difficult to contain fires and increases ISI by a huge margin.</MKTypography>
            </Grid>
            </Grid>
            </Grid>
        </Container>
        </MKBox>
    </>
  );
}

export default C4;
