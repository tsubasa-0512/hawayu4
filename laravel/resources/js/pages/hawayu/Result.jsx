import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,Radio, RadioGroup,Stack,List,ListItem, ListIcon,
    Container,Select,Image,Center,Grid, GridItem ,Text,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,useDisclosure,AlertDialogCloseButton
  } from "@chakra-ui/react"
import { AddIcon ,ArrowRightIcon} from '@chakra-ui/icons'
import { MdCheckCircle } from "react-icons/md";

function Result(user_id) {

    //ユーザー自分のハワユ結果
    const [results, setResults] = useState([]);
    //ユーザーが選択した月
    const [selectedmonth, setMonth] = useState('');

        
    useEffect(() => {
        onClickGetResults();
    },[])

    const onClickGetResults = async()=>{
        const api_token = document
        .querySelector('meta[name="api-token"]')
        .getAttribute("content")
    
        const csrf_token = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content")
        
        const month = selectedmonth
        await axios.get(`/api/past-inquiry?api_token=${api_token}`,{params:{month:month}})
        .then((res)=>{
            // alert("「" + api_token + "」参照完了")
            console.log("results",res)
            setResults(res.data)
        }).catch(error => {
            console.log('Error',error.res);
                });
        }

    const onChangeMonth = (e) =>{
        setMonth(e.target.value);
    }

    //結果画面を閉じる（valueに0を入れる）
    const onClickCloseResults = () =>{
        onClickGetResults();
    }

    return (
        <ChakraProvider>
        <Box>
        <Text ml="10%">ハワユ？履歴</Text>
            <Center>
            <Select onChange={onChangeMonth} value={selectedmonth}
            width={'50%'} mb={'1rem'}>
                {/* <Stack direction="row"> */}
                 <option value="1">1月</option>
                 <option value="2">2月</option>
                 <option value="3">3月</option>
                 <option value="4">4月</option>
                 <option value="5">5月</option>
                 <option value="6">6月</option>
                 <option value="7">7月</option>
                 <option value="8">8月</option>
                 <option value="9">9月</option>
                 <option value="10">10月</option>
                 <option value="11">11月</option>
                 <option value="12">12月</option>
                {/* </Stack> */}
            </Select>
            <Button onClick={onClickGetResults} mb={'1rem'}>表示</Button>
            </Center>
        </Box>
        {/* <Center> */}
        {/* </Center> */}

        {/* scoreが入っているデータだけ表示する（0点を含む） */}
            {results.map((data) =>
                                    <List spacing={3}
                                    key={data.id}
                                    style={{ width:'50%',margin:'auto'}}
                                    >
                                    {!(data.score == null) && 
                                        <ListItem id={data.id}
                                        //  key={number.id} 
                                    // onClick={onClickLoadChats} 
                                   
                                    style={{ backgroundColor: '#abedd8'}}>
                                    
                                       {data.score >= 5 ?
                                        <ListIcon as={MdCheckCircle} color="green.500" />
                                        :
                                        <ListIcon as={MdCheckCircle} color="red.500" />
                                        }
                                    
                                        {data.created_at}
                                        </ListItem>
}
                                    {!(data.score == null) && 
                                        <ListItem>
                                        {data.score}点
                                        </ListItem>
                                    }  
                                    </List>
                                    )}
            

                                        
       
        </ChakraProvider>
    )
}

export default Result
