import React ,{useContext, useState, useEffect} from 'react'
import { useHistory} from 'react-router-dom';
import { UserContext } from '../user/UserMyPage';
import UserProvider from '../user/UserProvider';

import AddChatRoom from './AddChatRoom';
import Chat from './Chat';

function ChatPage() {
    // const {user} = useContext(UserContext)

    return (
        <div>
           <UserProvider>
            <AddChatRoom
        //    prop={user}
            />
            <Chat 
        //    prop={user}
            />
            </UserProvider>
        </div>
    )
}

export default ChatPage
