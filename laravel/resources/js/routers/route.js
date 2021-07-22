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
import UserProvider from '../pages/user/UserProvider';
import WorkSleep from '../pages/contents/WorkSleep';
import ContentsList from '../pages/contents/ContentsList';
import ContentsListEn from '../pages/contents/ContentsListEn';
import WorkSleepEn from '../pages/contents/WorkSleepEn';
import WorkTekiou from '../pages/contents/WorkTekiou';
import WorkTekiouEn from '../pages/contents/WorkTekiouEn';

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


                 <Route path='/contents/list'>
                 <DefaultLayout>
                   <ContentsList />
                 </DefaultLayout>
                 </Route>

                 <Route path='/contents/en/list'>
                 <DefaultLayout>
                   <ContentsListEn />
                 </DefaultLayout>
                 </Route>

                 <Route path='/contents/en/sleep/work'>
                 <DefaultLayout>
                   <WorkSleepEn />
                 </DefaultLayout>
                 </Route>
                

                 <Route path='/contents/sleep/work'>
                 <DefaultLayout>
                   <WorkSleep />
                 </DefaultLayout>
                 </Route>

                 <Route path='/contents/en/tekiou/work'>
                 <DefaultLayout>
                   <WorkTekiouEn />
                 </DefaultLayout>
                 </Route>

                 <Route path='/contents/tekiou/work'>
                 <DefaultLayout>
                   <WorkTekiou />
                 </DefaultLayout>
                 </Route>

                {/* <UserProvider> */}
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
                  {/* </UserProvider> */}

                {/* <OpeProvider> */}
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
                  {/* </OpeProvider> */}
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
