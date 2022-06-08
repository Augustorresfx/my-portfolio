import * as React from "react";
import {GetStaticProps} from "next";


import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import Hero from "../components/Hero";

const IndexRoute: React.FC = ({}) => {


  return   <>
    <Hero/>
  </>
};


export default IndexRoute;
