import React from 'react';
import { Link } from "react-router-dom"
import styled from "styled-components"

function Header(){
    return(

        <SHeader>
            <SLink to ="/">HOME</SLink>
        </SHeader>

    )
}

const SHeader = styled.header`
    background-color:#fabb7d;
    color:#fff;
    text-align:center;
    padding:8px 0;
`
const SLink = styled(Link)`
    margin:0 8px;
    color:white;
`

export default Header;