import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,
    Container,Select,Image,Center,Grid, GridItem ,Text,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,useDisclosure,AlertDialogCloseButton
  } from "@chakra-ui/react"
import { AddIcon ,ArrowRightIcon} from '@chakra-ui/icons'

import { UserContext } from '../user/UserProvider';
import { PrimaryButton } from '../../parts/PrimaryButton';
import team from '../../images/team.png';

function Chat({ope_id}) {
    //チャットメッセージ
    const [msg_list, setMsg_list] = useState([]);
    //チャットルーム
    const [room_list, setRoom_list]= useState([]);
    //チャットルームごとのルーム情報
    const [room_info, setRoom_info]= useState([]);
    //ルームID
    const [room_id, setRoom_id] = useState("");
    //対応中ルーム一覧
     const [wipRoom,setWipRoom] = useState([]);
    //対応完了ルーム一覧
    const[doneRoom,setDoneRoom] = useState([]);

    useEffect(() => {
        loadRooms();

        window.Echo.channel('send-message')
            .listen('SendMessage',response => {
                console.log(response.messages['room_id']);


            const clicked_room_id = response.messages['room_id'];
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

                console.log("Json.stringify(dat)",JSON.stringify(dat));
                let arr = [];
                for(var x=0;x<dat.length;x++){
                    // console.log("Json dat[x].message",JSON.stringify(dat[x].message));
                    arr.push(dat[x]);      
                }
                setRoom_info(arr[0]);
            
                setMsg_list(arr[1]);
                // console.log("msg_list",msg_list)
                setRoom_id(clicked_room_id);
                console.log('url','/load-msg?room_id='+clicked_room_id)
            
                // console.log("room_id",newRoomId)
            })
            .catch((error) => {
                console.error(error);
            });
            });
    },[])

    const role = document.querySelector('meta[name="role"]').getAttribute("content");
    const api_token = document
        .querySelector('meta[name="api-token"]')
        .getAttribute("content")

    const csrf_token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
    //表示時に部屋情報ロード（useEffect）
    const loadRooms = async()=>{
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
            console.log("arr",arr)
        })
        .catch((error) => {
            console.error(error);
        }); 
    }

//新しくチャットルームを作る
    const onClickOpenChatRoom = async () => {
        await axios
        .post(`/api/create-room`,{api_token},{csrf_token})
        
        // .then( (roomres) => {
        //     setRoom(roomres.data);
        // })
        .then((res)=>{
           
            loadRooms();
            // console.log("roomid",room_id)
            // setRoom_id(res.data.id)
            // location.href = "/chatpage?roomid="+res.data.id;

            // console.log("dataid",res.data.id)
            // location.href="/chatpage"
            // console.log("roomid",res.data)
                // console.log("チャットルームを作りました")
                // e.preventDefault();
                // history.push("/chatpage");
                // console.log(dataId)
                
                })     
        
        .catch(error => {
                     console.log('Error',error.response);
                         });
                }
    
    //表示されたroomをクリックすると該当roomの全メッセージを表示（onClick）
    const onClickLoadChats = async (el_id)=>{
        const clicked_room_id = el_id.target.id;
        console.log(el_id.target.id)
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
            setRoom_info(arr[0]);
            setMsg_list(arr[1]);
            console.log(arr[0])
            // const newRoomInfoList = [...room_info, arr[0]]
            // setRoom_info(newRoomInfoList)
  
            setRoom_id(clicked_room_id);
            console.log('url','/load-msg?room_id='+clicked_room_id)
          
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
        // const { room_id } = useParams()
        //パラメータの取得
        // let urlParamStr = window.location.search
        // let params = {}

        // if (urlParamStr) {
        //     //?を除去
        //     urlParamStr = urlParamStr.substring(1)
        //     //urlパラメータをオブジェクトにまとめる
        //     urlParamStr.split('&').forEach( param => {
        //       const temp = param.split('=')
        //       //pramsオブジェクトにパラメータを追加
        //       params = {
        //         ...params,
        //         [temp[0]]: temp[1]
        //       }
        //     })
        //   }
        //   console.log("paramsのroomid",params.roomid)
        //   let room_id = params.roomid;
        
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
        // '&nickname='+nickname,
        // '&nickname='+user.nickname,
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

            const newMessagesList = [...msg_list, dat]
            // const newRoomInfo = [...room_info,dat]
            setMsg_list(newMessagesList);    
            // setRoom_info(newRoomInfo)
            
            //送信したら入力欄を空にする
            setInputChat("")
        })
        .catch((error) => {
            console.error(error);
        });
    }

    //保健師がルームに入る
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()

    
    const onClickJoinRoom =async () =>{
       const operator_id = ope_id
       console.log("operatorid",operator_id)
       console.log("roomid",room_id)
    //    await fetch('http://localhost/api/join-room?room_id='+room_id,{
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json',
    //         'X-CSRF-TOKEN':csrf_token,
    //         'API_TOKEN':api_token,
    //         'Accept':'application/json'
    //     }
    // })
       await axios.post (`http://localhost/api/join-room?room_id=${room_id}`,{api_token},{csrf_token})
    .then((response)=>{
        console.log("joinres",response)
        // location.href = "/chatpage?roomid="+room_id;
        alert("担当者になりました。対応中の相談一覧は、左の＋ボタンを押して下さい")
            }).catch(error => {
                 console.log('Error',error.response);
                     });
            }



        //保健師が対応中のルーム一覧を取得
        const onClickWip = async()=>{
        const operator_id = ope_id
            await axios.get(`http://localhost/api/wip?api_token=${api_token}`,{csrf_token})
        .then((response)=>{
            console.log("wipData",response.data)
            setWipRoom(response.data)
        }).catch(error => {
            console.log('Error',error.response);
                });
        }

        //保健師が対応中のルームを完了にする
        const onClickDoneRoom = async() =>{
            const operator_id = room_info.operator_id
            const room_id = room_info.id
            await axios.post(`http://localhost/api/close-room?room_id=${room_id}`,{api_token},{csrf_token},{operator_id})
        .then((response)=>{
            console.log("closeroom",response.data)
         
          
        }).then( 
             alert("「対応完了」にしました！ご対応をありがとうございました")
        ).catch(error => {
            console.log('Error',error.response);
                });
        }

        //保健師が対応完了→未完了に戻す
        const onClickUndone = async() =>{
            const operator_id = room_info.operator_id
            const room_id = room_info.id
            await axios.post(`http://localhost/api/rollback-room?room_id=${room_id}`,{api_token},{csrf_token},{operator_id})
            .then((response)=>{
                console.log("undoneroom",response.data)
                // setDoneRoom(response.data)
            }).then( 
                 alert("「対応中」に戻しました！ご対応をお願いいたします")
            ).catch(error => {
                console.log('Error',error.response);
                    });
            }

            //保健師のページに対応完了ルームを読み込む
            const onClickDone =async () =>{
                await axios.get(`http://localhost/api/done?api_token=${api_token}`,{csrf_token})
                .then((response)=>{
                    console.log("doneData",response.data)
                    // const newDoneRoom = [...doneRoom,response.data]
                    setDoneRoom(response.data)
                })
                .catch(error => {
                    console.log('Error',error.response);
                        });
            }

        return (
            <>
            <ChakraProvider>
            <div className="container">               
                <div className="row no-gutters">
                    <div className="col-3">
                        <div className="card">
                             <div className="card-header">一覧</div>
                        
                              <div className="card-body">
                           
                            
                                <ul id="user_list" className="user_list list-group">
                                {role==="operator"&&
                                <div>
                               
                                <Button leftIcon={<AddIcon />} 
                                    bg="#FFE3D3" size="sm" ml="0" onClick={onClickWip}>
                                       対応中
                                </Button>
                                {wipRoom.map((number) =>
                                    <a href="#"
                                    key={number.id}>
                                        <li id={number.id}
                                        //  key={number.id} 
                                    onClick={onClickLoadChats} 
                                    className="list-group-item list-group-item-action" 
                                    style={{ backgroundColor: '#abedd8' }}>
                                        {number.id}
                                        </li>
                                    </a>
                                    )}
                                        
                                </div>
                                }
                                 {role==="operator"&&
                                <div>
                               
                                <Button leftIcon={<AddIcon />} 
                                    bg="#FFE3D3" size="sm" ml="0" onClick={onClickDone}>
                                       対応済
                                </Button>
                                {doneRoom.map((rm) =>
                                    <a href="#"
                                    key={rm.id}>
                                        <li id={rm.id}
                                         key={rm.id} 
                                    onClick={onClickLoadChats} 
                                    className="list-group-item list-group-item-action" 
                                    style={{ backgroundColor: '#abedd8' }}>
                                        {rm.id}
                                        </li>
                                    </a>
                                    )}
                                        
                                </div>
                                }
                                {role==="user" && 
                                    <Button leftIcon={<AddIcon />} 
                                    bg="#FFE3D3" size="sm" onClick={onClickOpenChatRoom}>
                                        新しく相談する
                                    </Button>
                                }
                                {/* {role==="operator" && <Text>未対応</Text>} */}
                                    {room_list.map((number) =>
                                    <a href="#"
                                    key={number.id}>
                                        <li id={number.id}
                                        //  key={number.id} 
                                    onClick={onClickLoadChats} 
                                    className="list-group-item list-group-item-action" >
                                        {number.id}
                                        </li>
                                    </a>
        
                                    )}
                                        
                                </ul>
                            </div>                            
                        </div>
                    </div>
                    {/* チャット表示欄 */}
                    {room_id  && (
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
            
                                {/* オペレーター＆未対応時のみ表示 */}
                            {role==="operator" && room_info.status_id === 1 &&
                             ( <Button bg="#FFE3D3" size="sm"
                            leftIcon={<ArrowRightIcon />} 
                            onClick={onClickJoinRoom}>対応する</Button>)
                            }

                            {/* オペレーター＆対応中のみ表示 */}
                            {role==="operator" && room_info.status_id === 2 &&
                             ( <Button bg="#FFE3D3" size="sm"
                            leftIcon={<ArrowRightIcon />} 
                            onClick={onClickDoneRoom}>対応完了にする</Button>)
                            }

                            {/* オペレーター＆対応完了のみ表示 */}
                            {role==="operator" && room_info.status_id === 3 &&
                             ( <Button bg="#FFE3D3" size="sm"
                            leftIcon={<ArrowRightIcon />} 
                            onClick={onClickUndone}>未対応に戻す</Button>)
                            }


                                <SChatdiv>
                                <ul id="chat_list" className="chat_list list-group">
                                    {msg_list.map((msgs) =>
                                    <li className="list-group-item" id={msgs.id} key={msgs.id}>
                                       
                                        {msgs.sender === role ?
                                          //右（自分の送信）

                                          <SRightdiv>
                                            
                                            <SRImage>
                                            {role ==="user" ?
                                              <img
                                                    src="https://source.unsplash.com/random"
                                                    width= "150px"
                                                    height ="150px"
                                                    />
                                                :
                                            <img
                                                    src={team}
                                                    width= "150px"
                                                    height ="150px"
                                                    />
                                                }
                                            </SRImage> 
                                            
                                        
                                            <SRsays>
                                           
                                                    <p> {msgs.message}</p>
                                                     {/* : <p> ハワユチーム：{msgs.message}</p>} */}
                                          
                                            </SRsays>
                                          </SRightdiv> 
                                         
                                          //左（相手の送信）
                                        : 
                                        <SLeftdiv>
                                            <SChatting>
                                                <SImage>
                                                {role === "user" ?
                                                <img
                                                    src={team}
                                                    width= "150px"
                                                    height ="150px"
                                                    />
                                                    :
                                                    <img
                                                    src="https://source.unsplash.com/random"
                                                    width= "150px"
                                                    height ="150px"
                                                    />
                                            }
                                                </SImage> 
                                                <SSays>                       
                                                {role==="operator"
                                                    ? <p> {msgs.nickname}さん：{msgs.message}</p>
                                                    : <p> ハワユチーム：{msgs.message}</p>}
                                                 </SSays>
                                            </SChatting>
                                          </SLeftdiv>
                                        }
                                    </li>)}
                                </ul>
                                </SChatdiv>
                            </div>
                            
                    {/* チャット入力欄 （status_id=3の時は表示されない）*/}
                            {room_info.status_id === 3 ?
                            <Center>この相談は終了しました。</Center>
                            :
                            <div className="card-footer">
                                <input type="text" id="chat_tbox" className="form-control" 
                                placeholder="内容を入力して下さい" 
                                value={inputChat}
                               
                                onChange={handleInputChange}/>
                                <input type="submit" className="btn btn-primary btn-sm" 
                                value="送信" onClick={onClickSendChats}
                                   />
                            </div>
                            
                            }
                        </div>
                    </div>
                    )}
                </div>
            </div>
            </ChakraProvider>

            </>
        );
    }

//吹き出し用CSS
const SChatdiv = styled.div `
    padding: 20px 10px;
    max-width: 450px;
    margin: 15px auto;
    text-align: right;
    font-size: 14px;
    background: #FFE3D3;
    box-shadow:2px 2px 4px gray;
`
const SLeftdiv = styled.div `
    width: 100%;
    margin: 10px 0;
    overflow: hidden;
`

const SImage = styled.div`
    float: left;
    margin-right: -40px;
    width: 70px;

& img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
`
const SSays = styled.div `
    display: inline-block;
    position: relative; 
    margin: 0 0 0 50px;
    padding: 10px;
    max-width: 250px;
    border-radius: 12px;
    background: #edf1ee;

&::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 3px; 
    left: -19px;
    border: 8px solid transparent;
    border-right: 18px solid #edf1ee;
    -webkit-transform: rotate(35deg);
    transform: rotate(35deg);
  }
  & p {
    margin: 0;
    padding: 0;
  }
`

const SChatting = styled.div `
  width: 100%;
  text-align: left; 
`
const SRightdiv = styled.div `
    width: 100%;
    margin: 10px 0;
    overflow: hidden;
`

const SRsays = styled.div `
display: inline-block;
    position: relative; 
    margin: 0 0 0 50px;
    padding: 10px;
    max-width: 300px;
    border-radius: 12px;
    background: #edf1ee;

&::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 3px; 
    right: -18px;
    border: 8px solid transparent;
    border-right: 18px solid #edf1ee;
    -webkit-transform: rotate(140deg);
    transform: rotate(140deg);
  }
  & p {
    margin: 0;
    padding: 0;
    overflow-wrap: break-word;
  }

}
`
const SRImage = styled.div`
    float: right;
    margin-left: 10px;
    width: 70px;

& img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
}
`
export default Chat;