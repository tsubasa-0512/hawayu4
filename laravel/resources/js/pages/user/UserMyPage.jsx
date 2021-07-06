import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import UserInfo from './UserInfo';
import AddChatRoom from '../chats/AddChatRoom';

function UserMyPage() {
    const [user, setUser] = useState([]);

    const api_token=
    document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

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

    return (
        <>
        <SH1>User My Page</SH1>
        <UserInfo 
        user_id = {user.id}
        user_name={user.name}
        email={user.email}
        company_id={user.company_id}
        created_at={user.created_at}
        />
        <AddChatRoom 
        user_id = {user.id}
        />
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
    text-align:center;
    justify-content: center;
    `
export default UserMyPage;

// if (document.getElementById('usermypage')) {
//     ReactDOM.render(<UserMyPage />, document.getElementById('usermypage'));
// }