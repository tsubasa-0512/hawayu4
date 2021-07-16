import React from 'react'
import styled from 'styled-components';

function Footer() {
    return (
        <SFooter>
          &copy; 2021 Inc.TechGiraffe
        </SFooter>
    )
}

const SFooter = styled.footer`

    color:gray;
    text-align:center;
    padding:8px 0;
    position:fixed;
    bottom:0;
    width:100%;
`
export default Footer;
