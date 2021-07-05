import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import UserMyPage from './pages/user/UserMyPage';
import OpeMyPage from './pages/operators/OpeMyPage';
import { DefaultLayout } from './pages/layouts/DefaultLayout';

  function App() {
    return (
        <div>
            <Switch>
                <Route path='/' exact component={Home} />
                <DefaultLayout>
                  <Route path='/user/home' exact component={UserMyPage} />
                </DefaultLayout>
                <Route path='/operator/home' exact component={OpeMyPage} />
            </Switch>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('example'))
