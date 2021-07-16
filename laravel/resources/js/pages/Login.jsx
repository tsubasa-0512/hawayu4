import React from 'react';
import { useHistory} from 'react-router-dom';

import styled from 'styled-components';
import {
  IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
  Heading,Text,Spacer,
  Container,Select,Image,Center, Flex
} from "@chakra-ui/react"

import { PrimaryButton } from '../parts/PrimaryButton';

function Login() {
  const csrf_token = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content")

  const role = document
  .querySelector('meta[name="role"]')
  .getAttribute("content")
  
  const history = useHistory();
  var formstyle = {
    display: "none"
  };

  const loginUser = () =>  {
      document.querySelector("#login-form").submit();
    }

  const loginOpe = () =>  {
      document.querySelector("#login-form-ope").submit();
    }

    return (
      <>
     <ChakraProvider>
      {role ==="" ?
      <Box mx="auto" >
            <Box>
              <Button onClick={loginUser} mb="10px" bg="#FFE3D3" size="sm" shadow="lg" color="gray">従業員の方はこちら</Button>
              <form id="login-form" action="/user/login" method="GET" style={formstyle}>
              <input type="hidden" name="_token" value={ csrf_token } />
            </form>
            </Box>

            <Box>
              <Button onClick={loginOpe} mb="10px" bg="#FFE3D3" size="sm" shadow="lg" color="gray">産業保健師・看護師の方はこちら</Button>
              <form id="login-form-ope" action="/operator/login" method="GET" style={formstyle}>
              <input type="hidden" name="_token" value={ csrf_token } />
              </form>
            </Box>
      </Box>
      :

      <Box>
         ログインしています
         <Button onClick ={()=>history.goBack()}>戻る</Button>
      </Box>
    }
    </ChakraProvider>
      </>
    );
}

export default Login;

const SDiv = styled.div `
width:1000px;
margin:0 auto;
text-align:center;
`


// const SButton = styled.button`
//   background-color: #FFE3D3;
//   padding:6px 24px:
//   border:none;
//   border-radius:9999px;
//   outline:none;
//   box-shadow: 4px 4px 10px rgba(0, 0, 0, .2);
//   display:block;
//   margin:10px auto;
//   &:hover{
//     cursor:pointer;
//     opacity:0.7;
// }
// `
