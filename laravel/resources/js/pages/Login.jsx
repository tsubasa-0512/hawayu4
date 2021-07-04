import React from 'react';
import {  useHistory} from 'react-router-dom';


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
      {/* {role==="" && */}
      {role ==="" ?
      <div>
            <button id="login" onClick={loginUser}>ユーザーログイン</button>
            <form id="login-form" action="/user/login" method="GET" style={formstyle}>
            <input type="hidden" name="_token" value={ csrf_token } />
            </form>

            <button id="login" onClick={loginOpe}>保健師ログイン</button>
            <form id="login-form-ope" action="/operator/login" method="GET" style={formstyle}>
            <input type="hidden" name="_token" value={ csrf_token } />
            </form>
      </div>
      :
    //   }{!role==="" && 
      <div>
         ログインしています
         <button onClick ={()=>history.goBack()}>戻る</button>
      </div>
    }
      </>
    );
}

export default Login;
