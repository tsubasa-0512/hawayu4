import React, { memo } from 'react';
import Footer from "./Footer";
import Header from "./Header";

export const DefaultLayout = memo((props) =>{
    const{children}=props;
    return(
        <>
        <Header />
         {children}
        {/* <Footer /> */}
        </>
    )
});