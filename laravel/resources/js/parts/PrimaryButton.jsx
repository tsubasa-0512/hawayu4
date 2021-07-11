import React from 'react'
import styled from "styled-components"
import { DefaultButton } from './DefaultButton';

// propsで言葉を受け取って、画面ごとに違う文字を表示(children）)
export const PrimaryButton=(props)=> {
    const{ children,onClick } = props;
    return <SButton onClick={onClick}>{children}</SButton>;
}

// 既存のcomponent　にさらにcssを上書きする
const SButton = styled(DefaultButton)`
    background-color: #FFE3D3;
    margin:auto;
`