import React, {createContext, useEffect, useState } from 'react';
import axios from 'axios';
import OpeMyPage from '../operators/OpeMyPage';

export const UserContext = createContext({})

function UserProvider(props) {
    const {children} = props;
    const [user, setUser] = useState([]);

    const api_token=
    document
    .querySelector('meta[name="api-token"]')
    .getAttribute("content");

    const role = document
    .querySelector('meta[name="role"]')
    .getAttribute("content")

    useEffect(() => {
        getUser()
    },[])

    const getUser = async () => {
        console.log("URL",`/api/user?api_token=${api_token}`)
         await axios
        .get(`/api/user?api_token=${api_token}`)
        .then( (res) => {
                console.log("user",res.data)
                    setUser(res.data);
                }).catch(error => {
                     console.log('Error',error.response);
                         });

                }

    return (
        <>
        <UserContext.Provider value={{user}}>
         {children}
        </UserContext.Provider>
      
      </>
    )
}

export default UserProvider

