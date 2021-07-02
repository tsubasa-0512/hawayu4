import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

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
        <SDiv>
            <SBox>
             <dt>名前</dt>
             <dd>{user.name}</dd>
             {/* <dt>ユーザーネーム</dt>
             <dd>{user.nickname}</dd> */}
             <SImage
                src="https://source.unsplash.com/random"
                width= "150px"
                height ="150px"
              />
            </SBox>
             <S2Box>
                {/* <dt>性別</dt>
                <dd>{user.gender}</dd>
                <dt>誕生日</dt>
                <dd>{user.birthday}</dd> */}
                <dt>email</dt>
                <dd>{user.email}</dd>
                <dt>登録日</dt>
                <dd>{user.created_at}</dd>
             </S2Box>
      </SDiv>
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