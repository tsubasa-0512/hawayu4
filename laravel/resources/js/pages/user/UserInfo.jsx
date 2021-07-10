import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

const UserInfo= ({user_id,user_name,email,company_id,created_at}) =>{
   
    return (
        <>
        <SDiv>
            <SBox>
             <dt>名前</dt>
             <dd>{user_name}</dd>
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
                <dd>{email}</dd>
                {/* 法人コードと一致するcompany名を取得する予定 */}
                <dt>法人コード</dt>
                <dd>{company_id}</dd>
                <dt>登録日</dt>
                <dd>{created_at}</dd>
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
    width:1000px;
    margin:auto;
    text-align:center;
    justify-content: center;
    `
export default UserInfo;

// if (document.getElementById('usermypage')) {
//     ReactDOM.render(<UserMyPage />, document.getElementById('usermypage'));
// }