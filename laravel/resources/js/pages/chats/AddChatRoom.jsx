import React from 'react'
import styled from 'styled-components';
import UserInfo from '../user/UserInfo';

const AddChatRoom = ({user_id}) => {
    var formstyle = {
        display: "none"
      };

    const csrf_token = document
    .querySelector('meta[name="csrf-token"]')
    .getAttribute("content")

    const OpenChatRoom =()=>{
        document.querySelector("#addChatRoom").submit();
    }


    return (
        <SDiv>
            <SButton id="addchat" onClick={OpenChatRoom}>
                <SP>相談する</SP>
            </SButton>
            <form id="addChatRoom" action="/create-room" method="post" style={formstyle}>
            {/* <input type="hidden" name="user_id" value={ user_id } /> */}
            <input type="hidden" name="_token" value={ csrf_token } />
            </form>
        </SDiv>
    )
}

export default AddChatRoom

const SDiv = styled.div `
    width:1000px;
    margin:auto;
    text-align:center;
    display:flex;
    justify-content: center;
`

const SButton = styled.button`
    background-color:skyblue;
    width:105px;
    height:97px;
    margin:10px auto;
    border:none;
    border-radius:30%;
    outline:none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, .2);
`

const SP = styled.p`
    line-height:97px;
`
