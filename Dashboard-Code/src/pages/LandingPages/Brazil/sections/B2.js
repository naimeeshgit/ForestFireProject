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
import b2 from "assets/images/brazil/b2.png";

function B2() {
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
                <Grid alignSelf={'center'} lg={6}>
                    <img src={b2} alt="..." height={400} width={600}/>
                </Grid>
                <Grid alignSelf={'center'} lg={6}>
                  <MKTypography variant="body1" color="white" mt={1}>
                    <ul>
                      <li>From 2001 to 2021, Mato Grosso had the highest rate of tree cover loss due to fires with an average of 129kha lost per year.</li>
                      <li>Similarly, Sergipe had the lowest rate of tree cover loss due to fores fires.</li>
                    </ul>
                </MKTypography>
                </Grid>
            </Grid>
        </Container>
        </MKBox>
    </>
  );
}

export default B2;
