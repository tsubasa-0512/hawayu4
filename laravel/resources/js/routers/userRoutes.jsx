import React from 'react';
import Home from "../pages/Home";
import UserInfo from '../pages/user/UserInfo';
import UserMyPage from "../pages/user/UserMyPage";

export const userRoutes = [
    {
        path:"/home",
        exact :true,
        children:<UserMyPage />
    }

    // {
    //     path:"/home",
    //     exact :true,
    //     children:<UserInfo />
    // }
];