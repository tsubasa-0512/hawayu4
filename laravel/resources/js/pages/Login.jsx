import React from 'react';
import { useHistory} from 'react-router-dom';
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

      {role ==="" ?
      <div>
            <PrimaryButton onClick={loginUser}>従業員の方はこちら</PrimaryButton>
            <form id="login-form" action="/user/login" method="GET" style={formstyle}>
            <input type="hidden" name="_token" value={ csrf_token } />
            </form>

            <PrimaryButton onClick={loginOpe}>産業保健師・看護師の方はこちら</PrimaryButton>
            <form id="login-form-ope" action="/operator/login" method="GET" style={formstyle}>
            <input type="hidden" name="_token" value={ csrf_token } />
            </form>
      </div>
      :

      <div>
         ログインしています
         <button onClick ={()=>history.goBack()}>戻る</button>
      </div>
    }
      </>
    );
}

export default Login;

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
