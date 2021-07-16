import React, { useState } from 'react';

import styled from "styled-components"
import {
  IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
  FormControl,FormLabel,
  Container,Select,Image,Center
} from "@chakra-ui/react"

import Login from './Login';
import logo_transparent from '../images/logo_transparent.png';
function Home() {
            
  return(
    <>
    <ChakraProvider>
    <Box mx="auto" textAlign="center">
      <Box mx="auto" width="40%" height="40%" >
        <Image src={logo_transparent} />
      </Box>
       <Login />
    </Box>
    </ChakraProvider>
    </>   
  
  )
}

export default Home;

// const SImg = styled.img`
//   width:300px;
// `

// const SDiv = styled.div `
//   text-align:center;

// `