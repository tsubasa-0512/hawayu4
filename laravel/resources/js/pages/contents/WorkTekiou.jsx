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

import Meditation from './Meditation.png';

  const WorkTekiou = () =>{
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
                ストレスを知る・発散するワーク
            </Button>
            </Center>
         

        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader mx="auto">                
          ストレスを知る・発散するワーク
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Center>
            <Image src={Meditation} boxSize="70%"/>
          </Center>
          
          <List spacing={3} style={{ fontSize: '1rem', textAlign:'center'}}>
                <ListItem>
                  今日から、始めてみませんか？
                </ListItem>
              
                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                ストレスとなっていることを紙に書き出してみる(PCでもOK)
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                30分多めに寝る
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                30分だけ自分の時間を作り、やりたいことをやってみる

                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                5分だけ散歩
                <br />理想は緑がある公園だと◎
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                癒される香りのものを買ってみる
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                ストレスと感じるものから一度離れてみる
                </ListItem>

                <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                心療内科、メンタルクリニックなどへ相談してみる
                </ListItem>

                <ListItem style={{ fontSize: '1rem', textAlign:'center'}}>

                <ListIcon as={BiBeenHere} 
               color=  "green.500" />
                 産業保健師のReal Voice
               </ListItem>

                <Text>
                同じ状況下にいても、適応障害になる人とならない人はいます。
                ストレスの発散方法や物事の考え方の違い、元々のストレス耐性(ストレスに耐えられる力)の違いなど、理由は様々です。
                <br /><br />
                何に対してストレスを感じる？物事の捉え方の傾向は？ストレス耐性は高め？低め？
                これらを知っておくことが第一歩になります。
                <br /><br />
                良い悪いは判断せず、まずは自分の傾向・特徴を知ることが、ストレスフルな時代を乗り切る鍵です。
                <br /><br />
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

  export default WorkTekiou;