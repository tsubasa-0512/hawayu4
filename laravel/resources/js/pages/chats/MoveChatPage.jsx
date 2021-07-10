import React ,{useContext}from 'react';
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import { MenuButton } from '../../parts/MenuButton';
import { UserContext } from '../user/UserProvider';

function MoveChatPage(){
    const history = useHistory();
    const {user, setUser} = useContext(UserContext)
    // const user_id = user.id;

    const onClickMoveChat = () =>{

        history.push("/chatpage")
    }
    return(
        <MenuButton onClick={onClickMoveChat} >
            <p>チャットページへ</p>
        </MenuButton>

    )
}


const SP = styled.p`
    line-height:97px;
`
export default MoveChatPage;
