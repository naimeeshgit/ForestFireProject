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
import c5 from "assets/images/portugal/p7.png";

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
               Political and Institutional Factors
              </MKTypography>

              <MKTypography variant="body1" color="white" mt={1}>
                <ul>
                <li>Prior to the wildfire crises of 2003 and 2005 fire management policies have been markedly reactive, inconsistent and short-sighted.
</li><li>Before the 1974 revolution, Forest Rangers had authority over the forests. </li><li>However, post-revolution, the enforcement capacity diminished and power was transferred to Portuguese forest service (PFS).
</li><li>In 1980, Fire suppression was transferred from the PFS to the national fire fighting service.</li><li>
After the catastrophic fires of 2003 and 2005, the current national fire system, the DFCI, and fire plan were established in 2006.
               </li> </ul>
                <Grid alignSelf={'center'} lg={6}>
                <img src={c5} alt="..." height={300} width={600}/>
            </Grid>
            <ul>
            changes in national-level Portuguese forest strategies and plans
            </ul>
              </MKTypography>

            </Grid>
        </Container>
        </MKBox>
    </>
  );
}

export default C2;
