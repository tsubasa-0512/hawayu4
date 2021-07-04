import React from 'react';
import Home from "../pages/Home";
import UserMyPage from "../pages/user/UserMyPage";

export const userRoutes = [
    {
        path:"/user",
        exact :true,
        children:<Home />
    },

    {
        path:"/home",
        exact :true,
        children:<UserMyPage />
    }
];