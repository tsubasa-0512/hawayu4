import React, { memo } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import styled from 'styled-components';

export const DefaultLayout = memo((props) =>{
    const{children}=props;
    return(
        <SDiv>
        <Header />
         {children}
        <Footer />
        </SDiv>
    )
});

const SDiv = styled.div `
min-height: 100vh;
position: relative;
padding-bottom: 120px;
box-sizing: border-box;
`