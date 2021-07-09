import React from 'react'
import styled from "styled-components"
import { DefaultButton } from './DefaultButton';

// propsで言葉を受け取って、画面ごとに違う文字を表示(children）)
export const MenuButton=(props)=> {
    const{ children,onClick } = props;
    return (
            <SButton onClick={onClick}>{children}</SButton>
     
    )
}

// 既存のcomponent　にさらにcssを上書きする

// const SDiv = styled.div `
//     width:1000px;
//     margin:auto;
//     text-align:center;
//     display:flex;
//     justify-content: center;
// `
const SButton = styled(DefaultButton)`
    background-color:skyblue;
    width:105px;
    height:97px;
    margin:10px;
    border:none;
    border-radius:30%;
    outline:none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, .2);
`