import React, { useState } from 'react';
import styled from "styled-components"

import Login from './Login';
import logo_transparent from '../images/logo_transparent.png';
function Home() {
            
  return(
    <>
    <SDiv>
      <SImg src={logo_transparent} />
      <Login />
    </SDiv>
    </>   
  
  )
}

export default Home;

const SImg = styled.img`
  width:300px;
`

const SDiv = styled.div `
  text-align:center;
`