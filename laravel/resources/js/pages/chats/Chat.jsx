import React, { useEffect, useState,useContext } from 'react';
import { UserContext } from '../user/UserProvider';

function Chat({ope_id}) {
    //チャットメッセージ
    const [msg_list, setMsg_list] = useState([]);
    //チャットルーム
    const [room_list, setRoom_list]= useState([]);
    //ルームID
    const [room_id, setRoom_id] = useState();

    useEffect(() => {
        loadRooms();
    },[])

    //表示時に部屋情報ロード（useEffect）
    const loadRooms = async()=>{
      const role = document.querySelector('meta[name="role"]').getAttribute("content");
      const tok = document.querySelector('meta[name="csrf-token"]').content;
        await fetch('/rooms?role='+role,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'X-CSRF-TOKEN':tok,
                'Accept':'application/json'
            }
        })
        .then(response => response.json())
        .then(dat => {
            let arr = [];
            for(var x=0;x<dat.length;x++){
                arr.push(dat[x]);
            }
            setRoom_list(arr);
        })
        .catch((error) => {
            console.error(error);
        }); 
    }

    //表示されたroomをクリックすると該当roomの全メッセージを表示（onClick）
    const onClickLoadChats = async (el_id)=>{
        const clicked_room_id = el_id.target.id;
     
        let tok = document.querySelector('meta[name="csrf-token"]').content;
        // alert(el_id.target.id);
        await fetch('/load-msg?room_id='+clicked_room_id,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'X-CSRF-TOKEN':tok,
                'Accept':'application/json'
            }
        })
        .then(response => response.json())
        .then(dat => {
            console.log("Json.stringify(dat)",JSON.stringify(dat));
            let arr = [];
            for(var x=0;x<dat.length;x++){
                // console.log("Json dat[x].message",JSON.stringify(dat[x].message));
                arr.push(dat[x]);      
            }
            setMsg_list(arr);
            // console.log("msg_list",msg_list)
            setRoom_id(clicked_room_id);
            // console.log("room_id",newRoomId)
        })
        .catch((error) => {
            console.error(error);
        }); 
    }
    
    //チャット入力
    //入力内容の保存
    const {user, setUser} = useContext(UserContext)
    // const user_id = user.id;


    const [inputChat, setInputChat] = useState("");
        const handleInputChange =(e)=>{
            console.log(e,"event");
            setInputChat(e.target.value);
        }
    
    // チャット送信（onClick）
    const onClickSendChats= (e)=>{
        // const msg = document.getElementById('chat_tbox').value;
        const role = document.querySelector('meta[name="role"]').getAttribute("content");
        const tok = document.querySelector('meta[name="csrf-token"]').content;
        // let data = new FormData();
        // data.append('message','msg');

        //roleによってログイン中のidを返す
        let senderId =""
        if (role === "user"){
            senderId = user.id;
        }else {
            senderId = ope_id;
        }
      
        fetch('/messages?message='+inputChat+
        '&role='+role+
        '&id='+senderId+
        '&room_id='+room_id,
        // '&user_id=' + {user_id}+,
        // '&operator_id=' + {operator_id},{
            {
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'X-CSRF-TOKEN':tok,
              'Accept':'application/json'
            },
          })
        .then(response => response.json())
        .then(dat => {
            console.log('from onClickSendChats : '+JSON.stringify(dat));
            //仮の新しいメッセージリスト変数を作り、元のメッセージリストに入力分を追加することで
            //リアルタイムに反映させる
            const newMessagesList = [...msg_list, dat];
            setMsg_list(newMessagesList);
            //送信したら入力欄を空にする
            setInputChat("")
        })
        .catch((error) => {
            console.error(error);
        });
    }

    const onHandleKeyDown=(e)=>{
        if(e.keyCode ===13){
            onClickSendChats();
        }
    }
        return (
            <div className="container">                
                <div className="row no-gutters">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header">card header</div>
                            <div className="card-body">
                                <ul id="user_list" className="user_list list-group">
                                    {room_list.map((number) =>
                                    <a href="#" 
                                    key={number.id}>
                                        <li id={number.id} 
                                    onClick={onClickLoadChats} 
                                    className="list-group-item list-group-item-action" >
                                        部屋{number.id}
                                        </li>
                                    </a>  )}
                                </ul>
                            </div>                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <ul id="chat_list" className="chat_list list-group">
                                    {msg_list.map((msgs) =>
                                    <li className="list-group-item" id={msgs.id} key={msgs.id}>
                                        {msgs.sender === "user" 
                                        ? <div class="bg-success text-white float-left">{msgs.user_id}さん：{msgs.message}</div>
                                        : <div class="bg-info text-white float-right">ハワユチーム：{msgs.message}</div> }
                                        {/* {msgs.message} */}
                                    </li>)}
                                </ul>
                            </div>
                            <div className="card-footer">
                                <input type="text" id="chat_tbox" className="form-control" 
                                placeholder="Enter message..." 
                                value={inputChat}
                                onChange={handleInputChange}/>
                                <input type="submit" className="btn btn-primary btn-sm" 
                                value="送信" onClick={onClickSendChats}
                                   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Chat;