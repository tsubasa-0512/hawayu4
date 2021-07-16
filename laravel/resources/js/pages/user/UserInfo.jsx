import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import styled from 'styled-components';
import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,Text,Spacer,
    Container,Select,Image,Center, Flex
  } from "@chakra-ui/react"

const UserInfo= ({user_id,user_name,nickname,email,gender,birthday,company_id,created_at}) =>{
    const ageCalculation = ( birthday , nowDate ) => {
        const birthNumber = birthday.getFullYear() * 10000 
                                   + (birthday.getMonth() + 1 ) * 100 
                                   + birthday.getDate();
        const nowNumber = nowDate.getFullYear() * 10000 
                                   + (nowDate.getMonth() + 1 ) * 100 
                                   + nowDate.getDate();
     
        return Math.floor( (nowNumber - birthNumber) / 10000 );
    }
     
    const age = ageCalculation( new Date(birthday) , new Date() );

    return (
        <>
        <Flex shadow="sm" justifyContent="center" w="70vw" h="20vh" bg="orange.100"
        mx="auto" mt={"2rem"} mb={"1rem"} rounded="lg" p={4} shadow="lg">
            <Box>
                <Image
                    src="https://source.unsplash.com/random"
                    // boxSize= "100px"
                    w={"3rem"} h={"3rem"}
                    borderRadius="full"
                 />
                 <Text>{user_name}</Text>
            </Box>
            <Box color="gray.600" fontSize="sm" ml={"2rem"}>
                <Text>{gender} {age}歳</Text>
                {/* 法人コードと一致するcompany名を取得する予定 */}
                <Text>法人コード:{company_id}</Text>
                <Text>登録日：{created_at}</Text>
             </Box>

        </Flex>
      </>
    )
}
const SBox = styled.div`
    background-color:#FED7D7;
    width:20%;
    color:gray;
    box-shadow:2px 2px 4px gray;
`
const S2Box = styled.div`
    background-color:#FFF5F5;
    width:40%;
    color:gray;
    box-shadow:2px 2px 4px gray;
`
const SH1 = styled.h1`
    text-align:center;
    color: palevioletred;
`
const SImage = styled.img`
    border-radius:100%;
`
const SDiv = styled.div`
    display:flex;
    width:1000px;
    margin:auto;
    text-align:center;
    justify-content: center;
    `
export default UserInfo;

// if (document.getElementById('usermypage')) {
//     ReactDOM.render(<UserMyPage />, document.getElementById('usermypage'));
// }