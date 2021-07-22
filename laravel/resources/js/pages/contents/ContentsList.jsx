import React, { useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import axios from 'axios';

import styled from 'styled-components';
import {
    IconButton,Button,ButtonGroup,Box,ChakraProvider,Badge,
    Heading,
    Container,Select,Image,Center,Modal,ModalOverlay,ModalContent,
    ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Text,
    List,ListItem,ListIcon,Flex
  } from "@chakra-ui/react"
import { ArrowRightIcon,ArrowBackIcon } from '@chakra-ui/icons'
import { MdCheckCircle } from "react-icons/md";
import { BiBeenHere } from "react-icons/bi";

import question3 from '../hawayu/question3.png';
import Sleep from './Sleep';
import Jiritsu from './Tekiou';

  const ContentsList = () =>{
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();

    const onClickToMypage = () =>{
      history.push('/user/home')
    }

    const onClickToEnglish = () =>{
      history.push('/contents/en/list')
    }

    return(
        <ChakraProvider>

                  <ButtonGroup mt="0.5rem" ml="0.5rem" size="sm" isAttached variant="outline" onClick ={()=>history.goBack()}>
                    <IconButton aria-label="back" icon={<ArrowBackIcon />} />
                    <Button mr="-px">戻る</Button>  
                   </ButtonGroup>

                   <Button ml="0.5rem" onClick={onClickToEnglish}>English</Button>
  

           <Center mt={'2rem'}>
             <Sleep />
           </Center>

           <Center mt={'2rem'}>
             <Jiritsu />
           </Center>
      </ChakraProvider>
    )
  }

  export default ContentsList;