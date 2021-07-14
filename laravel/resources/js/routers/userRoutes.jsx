import React from 'react';
import HawayuForm from '../pages/hawayu/HawayuForm';
import UserMyPage from "../pages/user/UserMyPage";

export const userRoutes = [
    {
        path:"/home",
        exact :true,
        children:<UserMyPage />
    },
    {
        path:"/hawayuform",
        exact :true,
        children:<HawayuForm />
    }
];