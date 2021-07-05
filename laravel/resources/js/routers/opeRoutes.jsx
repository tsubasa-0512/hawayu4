import React from 'react';
import Home from '../pages/Home';
import OpeMyPage from '../pages/operators/OpeMyPage';

export const opeRoutes = [
    {
        path:"/operator",
        exact :true,
        children:<Home />
    },

    {
        path:"/home",
        exact :true,
        children:<OpeMyPage />
    }
];