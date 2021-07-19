import React, { useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,
    Container,Select,Image,Center,Grid, GridItem ,Text,
  } from "@chakra-ui/react"

import MoveChatPage from '../chats/MoveChatPage';
import { DefaultButton } from '../../parts/DefaultButton';
import Contents from '../contents/Contents';
import Result from '../hawayu/Result';

function UserMyPage(props) {

    const [user, setUser] = useState([]);
    const [createData, setCreateData] = useState([]);
    const api_token=
    document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

    const csrf_token = 
    document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content")

    useEffect(() => {
        getUser()
    },[])

    const getUser = async () => {
        console.log("URL",`/api/user?api_token=${api_token}`)
         await axios
        .get(`/api/user?api_token=${api_token}`)
        .then( (res) => {
                console.log("user",res.data)
                    setUser(res.data);
                }).catch(error => {
                     console.log('Error',error.response);
                         });
                }

        const history = useHistory();
        // const onClickToHawayu =()=>{ history.push('/user/hawayuform')}

        //Hawayuを作成し、フォーム送信ページへ
        const onClickToHawayu = async() =>{
            await axios.post("/api/create-inquiry",{api_token},{csrf_token})
        .then((res)=>{
            console.log("create",res.data)  
            // setCreateData(res.data)
            const createId = res.data.id
            history.push("/user/hawayu",{"inquiry_id":createId})
            history.push
             })    
        .catch(error => {
                     console.log('Error',error.response);
                         });
                }

        //ユーザー詳細へ
        const onClickToUserDetail = () =>{
            history.push("/user/detail")
        }

    return (
        <ChakraProvider>

        {/* <Heading as="h1" size="sm" color="gray">{user.nickname}さん、ハワユ?</Heading> */}
        <Box>

        <Center>
            <Button  w="90vw" h="20vh" bg="#FFE3D3"
        mx="auto" mt={"2rem"} mb={"1rem"} rounded="lg" p={4} shadow="lg"
        textAlign="center"　display="block" color="gray"
         onClick={onClickToHawayu}>
            {user.nickname}さん、ハワユ？
            <br />
            <Text fontSize="xs">今の自分を気軽に診断してみよう</Text>
            </Button>
        </Center>
        {/* <UserInfo 
        user_id = {user.id}
        user_name={user.name}
        nickname={user.nickname}
        birthday={user.birthday}
        gender={user.gender}
        email={user.email}
        company_id={user.company_id}
        created_at={user.created_at}
        /> */}
        </Box>
        <Box display="flex" justifyContent="center" 
        textAlign="center" mb={"1rem"}>
            <Button  
            bg="orange.100" shadow="lg" color="gray"
            w="30vw" h="20vw"
            mr={"1rem"}
            onClick={onClickToUserDetail}
                >登録内容
            </Button>
            <MoveChatPage />

        </Box>

        <Box textAlign="center" mb={"1rem"} >
        <Contents />
        </Box>

        <Result 
        user_id={user.id}/>
        {/* <AddChatRoom 
        user_id = {user.id}
        /> */}
        {/* <ChatPage 
        user_name={user.name}/> */}
    
      </ChakraProvider>
    )
}

// const SH1 = styled.h1`
//     font-size:30px;
//     text-align:center;
//     color: palevioletred;
// `
const SDiv = styled.div`
    display:flex;
    text-align:center;
    align-items: center;
    justify-content: center;
    `
const HAwayuButton = styled(DefaultButton)`
    background-color:#abedd8;
    width:200px;
    height:97px;
    margin:10px;
    border:none;
    border-radius:30%;
    outline:none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, .2);
`
   
export default UserMyPage;

// if (document.getElementById('usermypage')) {
//     ReactDOM.render(<UserMyPage />, document.getElementById('usermypage'));
// }