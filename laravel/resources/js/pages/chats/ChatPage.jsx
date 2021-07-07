import React from 'react'
import { useHistory} from 'react-router-dom';
import AddChatRoom from './AddChatRoom';
import Chat from './Chat';

function ChatPage() {
    return (
        <div>
           <AddChatRoom
           />
           <Chat />

        </div>
    )
}

export default ChatPage
