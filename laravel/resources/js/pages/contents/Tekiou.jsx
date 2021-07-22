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

  const Tekiou = () =>{
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();

    const onClickToMypage = () =>{
      history.push('/user/home')
    }

    const onClickToWork = () =>{
        history.push('/contents/tekiou/work')
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
                適応障害について
            </Button>
            </Center>

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">
          <Badge colorScheme="purple" mr="0.5rem">適応障害</Badge>
          <Badge colorScheme="green" mr="0.5rem">Tips</Badge>
            適応障害について
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
   
          <Center>
            <Image src={question3} boxSize="50%"/>
          </Center>
          <List spacing={3}>
                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListIcon as={BiBeenHere} color="green.500" />
                適応障害とは何か？
                </ListItem>
                <Text>
                特定の状況や出来事がその人にとっての強いストレスとなり、
                気分や行動面に症状がでることです。特定の状況や出来事とは、
                人間関係トラブル・引っ越し・結婚・部署異動・転職・育児や介護など。
                変化が多く重なってしまうと起きやすいです。
                比較的多く見られ、誰にでも起こりえます。
                
                <br /><br />
                適応障害の状態の一つとして、「抑うつ」「うつ状態」と言われることがありますが、
                適応障害はうつ病とは異なります。
                </Text>

                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListIcon as={BiBeenHere} 
               color=  "green.500" />【うつ病と適応障害の違い】
               </ListItem>

               <Text>
          ・うつ病：明確なきっかけが不明、ストレス源と思われるものから離れても状態の改善は難しい。発症している間はどんなことも楽しめない。脳に何かしらの問題があると言われており、うつ病に対しての薬が効きやすい。
          <br /><br />
          ・適応障害：明確なストレス源がありストレス源から離れると症状が回復しやすい。発症している間ももともと楽しいと思えることは比較的楽しめる。抑うつ感に対しての薬が効きにくいため、ストレス源から離れることが大切。睡眠障害が出ている場合は睡眠薬を飲むことも。
<br /><br />
          もちろん、適応障害を発症している人の中にはうつ病になっている可能性があるため一概には言えません。

                 </Text>

                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListIcon as={BiBeenHere} 
               color=  "green.500" />
                 こんな症状はありませんか？
               </ListItem>

                <Text>
・頭痛　・腹痛　・体がだるい　・普段よりも異常に涙もろい　・動悸
・意欲が低下している　・集中力が低下している　・ミスが増えた
・眠れない、中途覚醒がある　・気分が落ち込む　・めまいやふらつきがある
・これら症状が始まった時期が明確にわかる(ストレス源がわかる)
<br /><br />
もし上記症状が1ヶ月以上続いている場合は専門家へ相談をしましょう。
頭痛や腹痛など、身体の異常の可能性もあるため、まずは身体自体に異常がないか調べることが大切です。

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

  export default Tekiou;