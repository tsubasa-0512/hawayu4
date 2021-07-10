import React, {createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const OpeContext = createContext({})

function OpeProvider(props) {
    const {children} = props;
    const [operator, setOperator] = useState([]);

    const api_token=
    document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

    useEffect(() => {
        getOperator()
    },[])

    const getOperator = async () => {
        console.log("URL",`/api/operator?api_token=${api_token}`)
         await axios
        .get(`/api/operator?api_token=${api_token}`)
        .then( (res) => {
                console.log("operator",res.data)
                    setOperator(res.data);
                }).catch(error => {
                     console.log('Error',error.response);
                         });
                }

    return (
        <>
        <OpeContext.Provider value={{operator}}>
         {children}
        </OpeContext.Provider>
      
      </>
    )
}

export default OpeProvider

