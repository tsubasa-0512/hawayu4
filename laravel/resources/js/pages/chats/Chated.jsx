import styled from "styled-components"
import { FormControl,TextField } from '@material-ui/core';

import React ,{useState, useEffect} from 'react'


function Chat() {
 
    //入力されたテキスト
    const [text, setText] = useState("");
    //firebaseに保存した結果の表示
    const [message, setMessage] = useState("");
    //firebaseに保存するテキストのリスト
    const [texts, setTexts] = useState([]);
    //firebaseから読み込んだデータのリスト（textsと一致）
    const [datas, setDatas] = useState([]);

    //入力された内容をtextにセットする
    const handleInputChange = (e) =>{
        console.log(e)
        setText(e.target.value)
    }
    //保存用の関数（setChatData）を読み込み、非同期でfirebaseに登録
    const addInputChat = async() =>{
        const tempTexts = [...texts];
        tempTexts.push(text);
        setTexts(tempTexts);

        const msg = await setChatData(tempTexts)
        setMessage(`${msg}:${text}`)
    }

    // 表示用の関数（getChatData）を使い、非同期でデータ読み込み
    const reloadData = async()=>{
        const tempData = await getChatData();
        console.log(tempData);
        setDatas(tempData.texts);
    }

    // useEffect(()=>{
    //     const firebaseData = 
    //     db.collection("chats")
    //     .orderBy("created_at","desc")
    //     .onSnapshot((snapshot)=>{
    //         setData(
    //             snapshot.docs.map((dbData)=>({
    //                 id:dbData.id,
    //                 message:dbData.data().message,
    //                 room_id:dbData.data().room_id,
    //                 user_id:dbData.data().user_id,
    //                 created_at:dbData.data().created_at
    //             }))
    //         );
    //         console.log(data)
    //     })
    //     return () => {
    //         firebaseData()
    //     };
    // },[])

    return (
        <div>
         {/* <FormControl> */}
            <TextField
            label="チャット"
            value={text}
            onChange={handleInputChange}
            />
         {/* </FormControl> */}
     
        <button disabled={!text} onClick={addInputChat}>
            送信
            {/* <AddBox /> */}
            {/* <Button leftIcon={<FaTelegramPlane />} colorScheme="teal" variant="solid">SEND</Button> */}
        </button>

        <button onClick={reloadData}>
            リロード
        </button>

            {/* {data.map((data)=>(
            <ChatItem 
            key={data.id}
            id={data.id}
            user_id={data.user_id} 
            room_id={data.room_id} 
            message={data.message} 
            created_at={data.created_at}
            />
            ))} */}
            <p>{message}</p>
            <ul>
            {datas.map((data,index)=>(
                <li key={index}>{data}</li>
            ))}
            </ul>
          </div>
    )
}

// const SButton = styled.button `
// margin-top: 24px;
// margin-right: 0;
// width: 20%;
// `

export default Chat
