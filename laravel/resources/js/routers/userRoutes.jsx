import React from 'react';
import Hawayu from '../pages/hawayu/Hawayu';
import UserInfo from '../pages/user/UserInfo';
import UserMyPage from "../pages/user/UserMyPage";

export const userRoutes = [
    {
        path:"/home",
        exact :true,
        children:<UserMyPage />
    },
    {
        path:"/detail",
        exact :true,
        children:<UserInfo />
    },
    {
        path:"/hawayu",
        exact :true,
        children:<Hawayu />
    }
];