import React ,{useContext}from 'react';
import { Link, useHistory } from "react-router-dom"
import styled from "styled-components"
import { MenuButton } from '../../parts/MenuButton';
import { UserContext } from '../user/UserProvider';

import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,
    Container,Select,Image,Center,Text
  } from "@chakra-ui/react"
import { ArrowRightIcon,ArrowBackIcon } from '@chakra-ui/icons'

function MoveChatPage(){
    const history = useHistory();
    const {user, setUser} = useContext(UserContext)
    // const user_id = user.id;

    const onClickMoveChat = () =>{

        history.push("/chatpage")
    }
    return(
        <Button onClick={onClickMoveChat} bg="blue.100" shadow="lg" w="50vw" h="20vw"
        color="gray" leftIcon={<ArrowRightIcon />} >
            <Text as="u">相談する</Text>
        </Button>

    )
}


const SP = styled.p`
    line-height:97px;
`
export default MoveChatPage;
