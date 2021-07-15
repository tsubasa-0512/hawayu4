import React, { useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';

import UserInfo from './UserInfo';
import MoveChatPage from '../chats/MoveChatPage';
import { DefaultButton } from '../../parts/DefaultButton';

function UserMyPage(props) {

    const [user, setUser] = useState([]);

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

        const onClickToHawayu = async() =>{
            await axios.post("/api/create-inquiry",{api_token},{csrf_token})
        .then((res)=>{
            console.log("create",res.data)  
            history.push('/user/hawayu')
             })    
        .catch(error => {
                     console.log('Error',error.response);
                         });
                }
    return (
        <div>
        <SH1>{user.nickname}さん、こんにちは</SH1>

        <UserInfo 
        user_id = {user.id}
        user_name={user.name}
        nickname={user.nickname}
        birthday={user.birthday}
        gender={user.gender}
        email={user.email}
        company_id={user.company_id}
        created_at={user.created_at}
        />

        <SDiv>
        <HAwayuButton 
        onClick={onClickToHawayu}>ハワユ？</HAwayuButton>
        <MoveChatPage />
        </SDiv>
        {/* <AddChatRoom 
        user_id = {user.id}
        /> */}
        {/* <ChatPage 
        user_name={user.name}/> */}
      </div>
    )
}

const SH1 = styled.h1`
    font-size:30px;
    text-align:center;
    color: palevioletred;
`
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