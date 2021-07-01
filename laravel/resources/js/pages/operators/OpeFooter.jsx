import React from 'react'
import styled from 'styled-components';

function OpeFooter() {
    return (
        <SFooter>
          &copy; 2021 Inc.TechGiraffe
        </SFooter>
    )
}

const SFooter = styled.footer`
    background-color:#11999e;
    color:#fff;
    text-align:center;
    padding:8px 0;
    position:fixed;
    bottom:0;
    width:100%;
`
export default OpeFooter
