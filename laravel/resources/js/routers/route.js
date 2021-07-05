import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../pages/Home';

import { DefaultLayout } from '../pages/layouts/DefaultLayout';
import { userRoutes } from './userRoutes';
import { opeRoutes } from './opeRoutes';
import ChatPage from '../pages/chats/ChatPage';


  function App() {
    return (
        <div>
          <BrowserRouter>
            <Switch>
      
                 {/* <Route path='/' exact component={Home} /> */}
                 <Route exact path='/'>
                   <DefaultLayout>
                    <Home />
                   </DefaultLayout>
                 </Route>

                 <Route path='/chatpage'>
                   <DefaultLayout>
                    <ChatPage />
                   </DefaultLayout>
                 </Route>

                <Route 
                  path ="/user"
                  render ={({match:{url}})=>(
                    <Switch>
                      {userRoutes.map((route)=>(
                        <Route
                          key={route.path}
                          exact={route.exact}
                          path={`${url}${route.path}`}
                      >
                        <DefaultLayout>{route.children}</DefaultLayout>
                        </Route>
                  ))}
                    </Switch>
                  )}
                  />

                <Route 
                  path ="/operator"
                  render ={({match:{url}})=>(
                    <Switch>
                      {opeRoutes.map((route)=>(
                        <Route
                          key={route.path}
                          exact={route.exact}
                          path={`${url}${route.path}`}
                      >
                        <DefaultLayout>{route.children}</DefaultLayout>
                        </Route>
                  ))}
                    </Switch>
                  )}
                  />
                {/* //  <DefaultLayout>
                //  <Route path='/operator/home' exact component={OpeMyPage} />
                //  </DefaultLayout>

                //  <DefaultLayout>
                //   <Route path='/user/home' exact component={UserMyPage} />
                // </DefaultLayout>
               */}
            </Switch>
           </BrowserRouter>
        </div>
    );
}

  ReactDOM.render((
    <BrowserRouter>
      <App />
    </BrowserRouter>
  ), document.getElementById('example'))
