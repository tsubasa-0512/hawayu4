import React from 'react';
import Hawayu from '../pages/hawayu/Hawayu';
import UserMyPage from "../pages/user/UserMyPage";

export const userRoutes = [
    {
        path:"/home",
        exact :true,
        children:<UserMyPage />
    },
    {
        path:"/hawayu",
        exact :true,
        children:<Hawayu />
    }
];