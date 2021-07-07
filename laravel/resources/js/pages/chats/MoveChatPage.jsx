import React from 'react';
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import { MenuButton } from '../../parts/MenuButton';

function MoveChatPage(){
    const history = useHistory();
    const onClickMoveChat = () =>{
        history.push("/chatpage")
    }
    return(

        <MenuButton onClick={onClickMoveChat}>
            <p>チャットページへ</p>
        </MenuButton>

    )
}


const SP = styled.p`
    line-height:97px;
`
export default MoveChatPage;
