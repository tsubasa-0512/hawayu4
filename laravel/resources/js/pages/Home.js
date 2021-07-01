import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Home() {
  const csrf_token = document
  .querySelector('meta[name="csrf-token"]')
  .getAttribute("content")
  
  var formstyle = {
    display: "none"
  };

  const logoutUser = () =>  {
      document.querySelector("#logout-form").submit();
    }

  const logoutOpe = () =>  {
      document.querySelector("#logout-form-ope").submit();
    }

    return (
      <>
      <div>
            <button id="logout" onClick={logoutUser}>ユーザーログアウト</button>
            <form id="logout-form" action="/user/logout" method="POST" style={formstyle}>
            <input type="hidden" name="_token" value={ csrf_token } />
            </form>
      </div>
      <div>
            <button id="logout" onClick={logoutOpe}>保健師ログアウト</button>
            <form id="logout-form-ope" action="/operator/logout" method="POST" style={formstyle}>
            <input type="hidden" name="_token" value={ csrf_token } />
            </form>
      </div>
      </>
    );
}

export default Home;
