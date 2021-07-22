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

  const Sleep = () =>{
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();

    const onClickToMypage = () =>{
      history.push('/user/home')
    }

    const onClickToWork = () =>{
        history.push('/contents/sleep/work')
        // alert("work")
      }
  

    return(
        <ChakraProvider>
                {/* <ButtonGroup mt="0.5rem" ml="0.5rem" size="sm" isAttached variant="outline" onClick ={()=>history.goBack()}>
                    <IconButton aria-label="back" icon={<ArrowBackIcon />} />
                    <Button mr="-px">戻る</Button>  
                </ButtonGroup> */}
           <Center mt={'2rem'}>
            <Button onClick={onOpen} bg="yellow.100" color="gray" size="sm" shadow="lg"
            w="40vw" h="10vw">
                睡眠について
            </Button>
            </Center>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">
          <Badge colorScheme="purple" mr="0.5rem">睡眠</Badge>
          <Badge colorScheme="green" mr="0.5rem">Tips</Badge>
            睡眠について
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
   
          <Center>
            <Image src={question3} boxSize="50%"/>
          </Center>
          <List spacing={3}>
                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListIcon as={BiBeenHere} color="green.500" />
                不眠症とは？
                </ListItem>
                <Text>
                  睡眠トラブル(寝つきが悪い・途中で目が覚めてしまう、
                  朝早く目が覚めてしまう・熟眠感が得られない)が1ヶ月以上続き、
                  日中の疲れや意欲低下・集中力の低下などの不調が出てしまうことです。
                  <br /><br />
                  日中の疲れが出なくとも睡眠トラブルが出ていた場合は
                  早めの対策を取っておいた方が良いでしょう。
                 </Text>

                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListIcon as={BiBeenHere} 
               color=  "green.500" />
                 原因は？
               </ListItem>

                <Text>
                 体の病気により睡眠の質が低下している場合や、
                 ストレス・精神的な病気・日常生活の乱れなどが原因の場合もあります。
                 <br /><br />
                 体が原因の例としては、花粉症や喘息・頻尿・湿疹・レストレッグレス症候群など。
                 体が原因の場合はまずは体の原因にアプローチする必要があります。
                 <br /><br />
                一方で、ストレスや精神的な病気、日常生活の乱れについては次のワークを試してみましょう!
                </Text>


         </List>
      

          </ModalBody>

          <ModalFooter>
            <Button bg="gray" mr={3} onClick={onClose}>
              閉じる
            </Button>
            <Button bg="#FFE3D3" mr={3} onClick={onClickToWork} >
              ワークを試してみる
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
       
      </ChakraProvider>
    )
  }

  export default Sleep;