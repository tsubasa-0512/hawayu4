import React, { useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,
    Container,Select,Image,Center,Modal,ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Text,
    List,ListItem,ListIcon
  } from "@chakra-ui/react"
import { ArrowRightIcon,ArrowBackIcon } from '@chakra-ui/icons'
import { MdCheckCircle } from "react-icons/md";
import { BiBeenHere } from "react-icons/bi";

import question3 from '../hawayu/question3.png';

  const WorkSleep = () =>{
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();

    const onClickToMypage = () =>{
      history.push('/user/home')
    }

    return(
        <ChakraProvider>
                <ButtonGroup mt="0.5rem" ml="0.5rem" size="sm" isAttached variant="outline" onClick ={()=>history.goBack()}>
                    <IconButton aria-label="back" icon={<ArrowBackIcon />} />
                    <Button mr="-px">戻る</Button>  
                </ButtonGroup>
           <Center mt={'2rem'}>
            <Button onClick={onOpen} bg="yellow.100" color="gray" size="sm" shadow="lg"
            w="40vw" h="10vw">
                生活習慣の改善ワーク
            </Button>
            </Center>

          {/* onOpenがかぶるので、後でcomponent読み込みにするかも */}
            <Center mt={'2rem'}>
            <Button onClick={onOpen} bg="yellow.100" color="gray" size="sm" shadow="lg"
            w="40vw" h="10vw">
                自律神経改善ワーク
            </Button>
            </Center>
         

        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">                
            生活習慣の改善ワーク
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Center>
            <Image src={question3} boxSize="50%"/>
          </Center>
          
          <List spacing={3} style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListItem>
                  今日の夜から、始めてみませんか？
                </ListItem>
              
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                   寝る1時間前はPC・スマホ・TVをみない
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  寝る1時間前に簡単なストレッチを取り入れる
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                   寝る90分前までにお風呂に入る
                   <br />(40度のお風呂に15分)
                   ※お風呂が難しい場合は足湯でもOK
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  歯磨きは寝る30分〜1時間前までに
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  朝起きたら太陽の光を浴びる
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  日中はなるべく体を動かす時間をつくる
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                  夕方以降のカフェイン(緑茶や紅茶、コーヒー)を避ける
                </ListItem>

                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>

                <ListIcon as={BiBeenHere} 
               color=  "green.500" />
                 産業保健師のReal Voice
               </ListItem>

                <Text>
                仕事量が多いといった理由で、物理的に睡眠時間が取れない方も要注意です。
                <br /><br />
                初めの方は疲れてすぐに眠れることが多いですが、短時間睡眠が続くと、
                睡眠の質が徐々に低下していく可能性があります。
                <br /><br />
                業務量の調整など実際の現場では難しいかもしれないですが、可能であれば早めに睡眠時間を確保できるよう、
                上司や周囲へ相談してみることをおすすめします。
                </Text>

         </List>

          </ModalBody>

          <ModalFooter>
            <Button bg="gray" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button bg="#FFE3D3" mr={3} onClick={onClickToMypage}>
              マイページへ
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </ChakraProvider>
    )
  }

  export default WorkSleep;