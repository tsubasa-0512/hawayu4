import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"
import Logout from '../Logout';

function Header(){
    return(

        <SHeader>
            <SLink to ="/">HOME</SLink>
            <Logout />
        </SHeader>

    )
}

const SHeader = styled.header`
    background-color:#white;
    box-shadow:2px 2px 4px gray;
    color:#fff;
    text-align:center;
    padding:8px 0;
    width:100%;
    display:flex;
`
const SLink = styled(Link)`
    margin:0 8px;
    color:gray;
`

export default Header;