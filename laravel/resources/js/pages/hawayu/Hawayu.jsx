import React, { useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory,useLocation} from 'react-router-dom';

import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    FormControl,FormLabel,Text,
    Container,Select,Image,Center,
    Modal,ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure
  } from "@chakra-ui/react"
import { ArrowRightIcon,ArrowBackIcon } from '@chakra-ui/icons'

import question1 from './question1.png';
import question2 from './question2.png';
import question3 from './question3.png';
import question4 from './question4.png';
import MoveChatPage from '../chats/MoveChatPage';


const Hawayu = () =>{
    const history = useHistory();
    const location = useLocation();
    //質問と選択肢の内容（dbから）
    const  [question, setQuestion] = useState([]);
    //回答内容
    const  [answerData, setAnswerData] = useState([]);
    //回答結果の内容（スコアなど）
    const  [scoreData, setScoreData] = useState([]);
    //モーダル用
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef()
    const [show, setShow] = useState(false)

    const pictures = [question1,question2,question3,question4]

    const inquiry_Id = location.state.inquiry_id

    const api_token = document
        .querySelector('meta[name="api-token"]')
        .getAttribute("content")

    const csrf_token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
        
    // const onClickCreateQuestion = async() =>{
    //     await axios.post("/api/create-inquiry",{api_token},{csrf_token})
    // .then((res)=>{
    //     console.log("create",res.data)   
    //     onClickShowQuestion();
    //      })     
    // .catch(error => {
    //              console.log('Error',error.response);
    //                  });
    //         }

    useEffect(() => {
        onClickShowQuestion()
    },[])

    const onClickShowQuestion = async() =>{
                await axios.get("/api/show-question",{api_token},{csrf_token})
                .then((res)=>{   
                    setQuestion(res.data)
                    console.log(res.data)
                 
                    }
                        ) 
                .catch(error => {
                             console.log('Error',error.response);
                                 });
                        }  
              
　　//質問ごとの回答をsetStateする
    const onChangeSetData = (e) =>{
        e.preventDefault();
        //questionID：answerID
        setAnswerData([...answerData,(JSON.stringify(e.target.value))])
    }

    //更新部分：送信する関数（回答内容とハワユidを付与）
    // エンドポイントはdeploy時に本番URLに変える必要あり
    const onClickSubmit = async() =>{
       await axios.post('http://localhost/api/answer-inquiry',{
        answer: answerData,
        inquiry_id: inquiry_Id,
        api_token:api_token
    }).then((res)=>{
        console.log(res.data);
        setScoreData(res.data)
    }).then(()=>{
        console.log(scoreData)
        setShow(true)
    })
    
    }
    //マイページへ戻る
    const onClickToMyPage = ()=>{
        history.push('/user/home')
    }

        return(
            <>
            <ChakraProvider>
                <ButtonGroup size="sm" isAttached variant="outline" onClick ={()=>history.goBack()}>
                    <IconButton aria-label="back" icon={<ArrowBackIcon />} />
                    <Button mr="-px">戻る</Button>  
                </ButtonGroup>
            </ChakraProvider>
        
            <ChakraProvider>
            {question.map((q) =>
                                       <Container key={q.id} maxW="xl" centerContent >
                                       <ul>
                                       <FormLabel>                     
                                            <Badge borderRadius="full" px="2" colorScheme="teal">
                                              {q.id}
                                            </Badge>
                                        </FormLabel>
                                        <Box width="30%" height="30%">
                                        <Image
                                        
                                            objectFit="cover"
                                            src={pictures[(q.id)-1]}
                                        />
                                        </Box>
                                       {q.question}
                                       <Select placeholder="回答を選ぶ" 
                                       name={"A"+q.id}
                                       onChange={ onChangeSetData }>
                                            {q.answers.map((a)=>
                                            <option value={a.id} key={a.id}>{a.answer}</option> 
                                            )}
                                      </Select>
                                      </ul> 
            
                                        </Container>
                                    )}
                                                               
                                         <Center>
                                             <Button leftIcon={<ArrowRightIcon />} 
                                                onClick={onClickSubmit}
                                                bg="#FFE3D3" size="sm">
                                                    送信する
                                             </Button>
                                        </Center>

            {/* 結果表示用モーダル */}
    
         <Modal finalFocusRef={finalRef}
          isOpen={show} 
          onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>ハワユ？</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          {scoreData.score && 
               <ul >
                <li>{scoreData.updated_at}</li>
                <li>{scoreData.score}点</li>
                <li>{
                    scoreData.score >= 5 ?
                    "良い調子ですね！"
                    :
                     <MoveChatPage />
                    }</li>
               </ul>
            }
          </ModalBody>

          <ModalFooter>
            <Button bg="gray" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button bg="#FFE3D3" mr={3} onClick={onClickToMyPage}>
              マイページへ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                               
                 </ChakraProvider>

            </>
        )

    }

export default Hawayu;