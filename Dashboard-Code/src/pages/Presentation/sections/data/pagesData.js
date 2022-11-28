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

import canada from "assets/images/flags/canada.jpg";
import portugal from "assets/images/flags/portugal.jpg";
import brazil from "assets/images/flags/brazil.jpg";
import india from "assets/images/flags/india.jpg";
import bio from "assets/images/flags/bio.jpg";
import emissions from "assets/images/flags/emissions.jpg";
import fire from "assets/images/flags/fire.jpg";

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/pages";

export default [
  {
    image: `${canada}`,
    name: "Canada",
    route: "/canada",
  },
  {
    image: `${portugal}`,
    name: "Portugal",
    route: "/portugal",
  },
  {
    image: `${brazil}`,
    name: "Brazil",
    route: "/brazil",
  },
  {
    image: `${india}`,
    name: "India",
    route: "/india",
  },
  {
    image: `${bio}`,
    name: "Biodiversity Impact",
    route: "/biodiversity-impact",
  },
  {
    image: `${emissions}`,
    name: "Global Emissions",
    route: "/global-emissions",
  },
  {
    image: `${fire}`,
    name: "Fire Management",
    route: "/fire-management",
  }
];
