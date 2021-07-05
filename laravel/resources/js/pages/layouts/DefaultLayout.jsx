import React from 'react';
import Footer from "./Footer";
import Header from "./Header";

export const DefaultLayout = (props) =>{
    const{children}=props;
    return(
        <>
        <Header />
        {children}
        <Footer />
        </>
    )
}