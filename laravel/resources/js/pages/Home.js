import React, { useState } from 'react';
import {ReactDOM,Link} from 'react-dom';
import axios from 'axios';
import { Switch , useHistory} from 'react-router-dom';
import Login from './Login';
function Home() {

//   const userLogin = () =>  {
//     axios
//    .get(`/api/user-login`)
//  }


//   const opeLogin = () =>  {
//    axios
//    .get(`/api/operator-login`)
//  }

            
  return(
    <>
    ホームページ
    <Login />
           
    </>
  )
}

export default Home;
