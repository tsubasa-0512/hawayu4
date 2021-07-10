import React ,{useContext, useState, useEffect} from 'react'
import { useHistory} from 'react-router-dom';
import OpeProvider from '../operators/OpeProvider';
import { UserContext } from '../user/UserMyPage';
import UserProvider from '../user/UserProvider';

import AddChatRoom from './AddChatRoom';
import Chat from './Chat';

function OpeChatPage() {
    // const {user} = useContext(UserContext)

    return (
        <div>
           <OpeProvider>
            <Chat 
        //    prop={user}
            />
            </OpeProvider>
        </div>
    )
}

export default OpeChatPage;
