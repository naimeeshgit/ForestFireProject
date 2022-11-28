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
import i3 from "assets/images/india/i3.png";

function I4() {
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
            
            <Grid item xs={12} md={8} sx={{ mb: 1, mt:3 }}>
              <MKTypography variant="h2" color="white">
                Forest Fires over the years
              </MKTypography>
            </Grid>

            <Grid container alignItems={'center'} lg={12}>
              <Grid alignSelf={'center'} lg={12} mt={2}>
                  <img src={i3} alt="..." height={350} width={600}/>
              </Grid>


              <Grid alignSelf={'center'} lg={12}>
                <MKTypography variant="body1" color="white" mt={1}>
                  <ul>
                    <li>The spike seen in the graph above from 2016 can be mainly attributed to one of the worst forest fires to ever occur in India. The 2016 Uttarakhand forest fires were a series of widespread, damaging wildfires that took place in Uttarakhand, India between April and May 2016. </li>
                    <li>The fires were caused by a heatwave that spread across Uttarakhand and were the worst recorded in the region with a reported 4,538 hectares (11,210 acres) of forest burnt down.</li>
                    <li>Officials detected nearly 1,600 total fires which were brought under control by 2 May, and as rain fell the following day, it reduced the impact of the wildfires. An initial report on 4 May noted that 3,500 hectares (8,600 acres) had been destroyed by the fire.</li>
                  </ul>
                </MKTypography>
              </Grid>
            </Grid>

        </Container>
        </MKBox>
    </>
  );
}

export default I4;
