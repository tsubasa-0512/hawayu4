//functionコンポーネントに直してる元のやつ
import React, { useEffect, useState } from 'react';

function Chat() {
    //チャットメッセージ
    const [msg_list, setMsg_list] = useState([]);
    //チャットルーム
    const [room_list, setRoom_list]= useState([]);

    useEffect(() => {
        loadRooms();
        // subscribeToPusher()
    },[])
        // this.loadRooms();
        // this.subscribeToPusher(); 
        
        Echo.channel('send-message').listen('SendMessage',(e)=> {
          let tok = document.querySelector('meta[name="csrf-token"]').content;
          // 選択したroom_idを常に保持しており、その値を以下のurlに入れたい
          //マウント時にpusherからの通知が送られるとメッセージをリロードするapi
          fetch('/load-msg?room_id=1',{
              method:'POST',
              headers:{
                  'Content-Type':'application/json',
                  'X-CSRF-TOKEN':tok,
                  'Accept':'application/json'
              }
          })
          .then(response => response.json())
          .then(dat => {
              // console.log(JSON.stringify(dat));
              let arr = [];
              for(var x=0;x<dat.length;x++){
                  // console.log(JSON.stringify(dat[x].message));
                  arr.push(dat[x]);      
              }
              setMsg_list(JSON.stringify(dat[x].message));
            //   this.setState({
            //       msg_list:this.state.msg_list.concat(arr)
            //   });
          })
          .catch((error) => {
              console.error(error);
          }); 
        });
        
    //済：表示時に部屋情報ロード（useEffect）
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
            this.setState({room_list:this.state.room_list.concat(arr)});
        })
        .catch((error) => {
            console.error(error);
        }); 
    }

    //済：表示されたroomをクリックすると該当roomの全メッセージが表示
    const loadChats = (el_id)=>{
        let clicked_room_id = el_id.target.id;
        let tok = document.querySelector('meta[name="csrf-token"]').content;
        // alert(el_id.target.id);
        fetch('/load-msg?room_id='+clicked_room_id,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'X-CSRF-TOKEN':tok,
                'Accept':'application/json'
            }
        })
        .then(response => response.json())
        .then(dat => {
            // console.log(JSON.stringify(dat));
            let arr = [];
            for(var x=0;x<dat.length;x++){
                // console.log(JSON.stringify(dat[x].message));
                arr.push(dat[x]);      
            }
            this.setState({msg_list:[]});
            this.setState({
                msg_list:this.state.msg_list.concat(arr)
            });
        })
        .catch((error) => {
            console.error(error);
        }); 
    }
    

    const renderList=(dataToRender)=>{
        let list = document.getElementById('chat_list');
        let list_item = document.createElement('li');
        list_item.innerHTML = dataToRender;
        list.appendChild(list_item);
    }

    // 済：チャット送信
    const handleEve= (e)=>{
        let msg = document.getElementById('chat_tbox').value;
        
        let tok = document.querySelector('meta[name="csrf-token"]').content;
        
        let data = new FormData();
        data.append('message','msg');
        fetch('/messages?message='+msg+'&operator_id=2'+'&room_id=1',{
            method:'POST',
            headers:{
              'Content-Type':'application/json',
              'X-CSRF-TOKEN':tok,
              'Accept':'application/json'
            },
          })
        .then(response => response.json())
        .then(dat => {
            console.log('from handleve : '+JSON.stringify(dat));
        })
        .catch((error) => {
            console.error(error);
        });

        // this.subscribeToPusher();       
        
    }

    //表示時にpusher・チャンネル接続(useEffect)
    const subscribeToPusher=()=>{
        let a_tok = document.querySelector('meta[name="csrf-token"]').content;
        Pusher.logToConsole = true;
        var pusher = new Pusher('f23935e89d5fa6bab2e8', {
          cluster: 'ap3',
          auth:{
            headers:{
              'X-CSRF-TOKEN':a_tok
            }
          }
        });
        // var new_msg = [];
        //SendMessage = 送信時にapi接続→接続先のapiでデータ保存＋pusherにmessage送信
        var channel = pusher.subscribe('send-message');
        channel.bind('App\\Events\\SendMessage', function(d) {
          // console.log("you have a new message:"+JSON.stringify(d));
          // new_msg.push(d.message.message);
        });      
    }

    
        return (
            <div className="container">                
                <div className="row no-gutters">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-header">card header</div>
                            <div className="card-body">
                                <ul id="user_list" className="user_list list-group">
                                    {this.state.room_list.map((number) =>
                                    <a href="#"><li id={number.id} onClick={this.loadChats} className="list-group-item list-group-item-action" key={number.id}>部屋{number.id}</li></a>  )}
                                </ul>
                            </div>                            
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <ul id="chat_list" className="chat_list list-group">
                                    {this.state.msg_list.map((msgs) =>
                                    <li className="list-group-item" id={msgs.id} key={msgs.id}>{msgs.message}</li>  )}
                                </ul>
                            </div>
                            <div className="card-footer">
                                <input type="text" id="chat_tbox" className="form-control" placeholder="Enter message..." />
                                <input type="submit" className="btn btn-primary btn-sm" value="送信" onClick={this.handleEve} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

export default Chat;